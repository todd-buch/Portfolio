#!/usr/bin/env bash
# Convert portfolio JPG/PNG assets to WebP for web delivery.
#
# Default: walk src/assets and photography galleries, create sibling .webp
# files, skip any target that already exists and is at least as new as the source.
#
# Usage:
#   ./scripts/optimize_images.sh              # all known image roots
#   ./scripts/optimize_images.sh path/to.jpg  # one file (or a directory)
#   ./scripts/optimize_images.sh --force      # reconvert even if webp is current
#   ./scripts/optimize_images.sh --help
#
# Optional flags (combine freely):
#   --force              Re-encode even when an up-to-date .webp exists
#   --remove-sources     Delete source JPG/PNG after a successful conversion
#   --max-edge N         Long-edge cap in px (default 2048; 0 = no resize)
#   --quality N          cwebp quality 0–100 (default 82 photos / 90 logos)

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Prefer Homebrew on Apple Silicon, then Intel, then PATH
if [[ -x /opt/homebrew/bin/cwebp ]]; then
  CWEBP="/opt/homebrew/bin/cwebp"
elif [[ -x /usr/local/bin/cwebp ]]; then
  CWEBP="/usr/local/bin/cwebp"
elif command -v cwebp >/dev/null 2>&1; then
  CWEBP="$(command -v cwebp)"
else
  echo "Error: cwebp not found. Install with: brew install webp" >&2
  exit 1
fi

FORCE=0
REMOVE_SOURCES=0
MAX_EDGE=2048
QUALITY_PHOTO=82
QUALITY_LOGO=90
POSITIONAL=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    -h|--help)
      sed -n '2,20p' "$0" | sed 's/^# \?//'
      exit 0
      ;;
    --force)
      FORCE=1
      shift
      ;;
    --remove-sources)
      REMOVE_SOURCES=1
      shift
      ;;
    --max-edge)
      MAX_EDGE="${2:?--max-edge requires a number}"
      shift 2
      ;;
    --quality)
      QUALITY_PHOTO="${2:?--quality requires a number}"
      QUALITY_LOGO="$QUALITY_PHOTO"
      shift 2
      ;;
    --)
      shift
      POSITIONAL+=("$@")
      break
      ;;
    -*)
      echo "Unknown option: $1 (try --help)" >&2
      exit 1
      ;;
    *)
      POSITIONAL+=("$1")
      shift
      ;;
  esac
done

# Default scan roots when no paths are given
DEFAULT_ROOTS=(
  "src/assets"
  "src/pages/Photography/galleries"
)

is_convertible() {
  local f="$1"
  local base ext
  base="$(basename "$f")"
  # Skip Affinity / lock / hidden
  [[ "$base" == .* ]] && return 1
  [[ "$base" == *.af ]] && return 1
  [[ "$base" == *.af~lock~ ]] && return 1

  ext="${f##*.}"
  ext="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"
  case "$ext" in
    jpg|jpeg|png) return 0 ;;
    *) return 1 ;;
  esac
}

# Quality: logos / small brand marks slightly higher
quality_for() {
  local f="$1"
  local base
  base="$(basename "$f")"
  case "$base" in
    Logo*|logo*|socialcard*|Socialcard*)
      echo "$QUALITY_LOGO"
      ;;
    *)
      echo "$QUALITY_PHOTO"
      ;;
  esac
}

# Read pixel width/height via sips (macOS) when available
image_dims() {
  local f="$1"
  if command -v sips >/dev/null 2>&1; then
    # sips prints:  pixelWidth: 4032
    local w h
    w="$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/ {print $2}')"
    h="$(sips -g pixelHeight "$f" 2>/dev/null | awk '/pixelHeight/ {print $2}')"
    if [[ -n "${w:-}" && -n "${h:-}" && "$w" =~ ^[0-9]+$ && "$h" =~ ^[0-9]+$ ]]; then
      echo "$w $h"
      return 0
    fi
  fi
  return 1
}

# Echo "width height" to pass to cwebp -resize, or empty if no resize needed
resize_args() {
  local f="$1"
  if [[ "$MAX_EDGE" -le 0 ]]; then
    return 0
  fi
  local dims w h long
  dims="$(image_dims "$f" || true)"
  [[ -z "$dims" ]] && return 0
  read -r w h <<<"$dims"
  if (( w >= h )); then
    long=$w
    if (( long > MAX_EDGE )); then
      echo "$MAX_EDGE 0"
    fi
  else
    long=$h
    if (( long > MAX_EDGE )); then
      echo "0 $MAX_EDGE"
    fi
  fi
}

convert_one() {
  local src="$1"
  local out q resize_w resize_h
  out="${src%.*}.webp"

  if [[ ! -f "$src" ]]; then
    echo "  skip (missing): $src"
    return 0
  fi

  if [[ $FORCE -eq 0 && -f "$out" && ! "$src" -nt "$out" ]]; then
    echo "  skip (up to date): $out"
    SKIPPED=$((SKIPPED + 1))
    return 0
  fi

  q="$(quality_for "$src")"
  local -a cmd=("$CWEBP" -quiet -q "$q")

  # Optional long-edge cap
  local resize
  resize="$(resize_args "$src" || true)"
  if [[ -n "$resize" ]]; then
    read -r resize_w resize_h <<<"$resize"
    cmd+=(-resize "$resize_w" "$resize_h")
  fi

  cmd+=("$src" -o "$out")

  echo "  encode q=$q${resize:+ resize ${resize_w}x${resize_h}}: $src → $out"
  if ! "${cmd[@]}"; then
    echo "  ERROR encoding $src" >&2
    FAILED=$((FAILED + 1))
    return 0
  fi

  CONVERTED=$((CONVERTED + 1))

  if [[ $REMOVE_SOURCES -eq 1 ]]; then
    rm -f "$src"
    echo "  removed source: $src"
  fi
}

collect_from_dir() {
  local dir="$1"
  [[ -d "$dir" ]] || return 0
  # -print0 / read for spaces in filenames (e.g. "01 - DSC02846.jpg")
  while IFS= read -r -d '' f; do
    if is_convertible "$f"; then
      FILES+=("$f")
    fi
  done < <(find "$dir" -type f \( \
    -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \
  \) ! -name '.*' -print0 2>/dev/null)
}

CONVERTED=0
SKIPPED=0
FAILED=0
FILES=()

if [[ ${#POSITIONAL[@]} -eq 0 ]]; then
  for root in "${DEFAULT_ROOTS[@]}"; do
    collect_from_dir "$root"
  done
else
  for path in "${POSITIONAL[@]}"; do
    if [[ -d "$path" ]]; then
      collect_from_dir "$path"
    elif [[ -f "$path" ]]; then
      if is_convertible "$path"; then
        FILES+=("$path")
      else
        echo "Not a convertible image: $path" >&2
        exit 1
      fi
    else
      echo "Path not found: $path" >&2
      exit 1
    fi
  done
fi

# Stable sort (null-safe)
if [[ ${#FILES[@]} -gt 0 ]]; then
  IFS=$'\n' FILES=($(printf '%s\n' "${FILES[@]}" | LC_ALL=C sort -u))
  unset IFS
fi

echo "cwebp: $CWEBP"
echo "max long edge: ${MAX_EDGE}px (0 = none) | force=$FORCE | remove-sources=$REMOVE_SOURCES"
echo "files to consider: ${#FILES[@]}"
echo

for f in "${FILES[@]+"${FILES[@]}"}"; do
  convert_one "$f"
done

echo
echo "Done. converted=$CONVERTED skipped=$SKIPPED failed=$FAILED"

if [[ $FAILED -gt 0 ]]; then
  exit 1
fi

if [[ $CONVERTED -gt 0 && $REMOVE_SOURCES -eq 0 ]]; then
  cat <<'NOTE'

Note: Source JPG/PNG were kept (safe default). After you confirm the .webp
files look good, delete the sources or re-run with --remove-sources.
Galleries only import .webp/.avif. Featured imports should use the .webp path.
NOTE
fi
