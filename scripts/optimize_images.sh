#!/bin/bash
# Helper script to optimize heavy portfolio PNG/JPG assets using cwebp

CWEBP="/opt/homebrew/bin/cwebp"
ASSETS_DIR="src/assets"

if [ ! -f "$CWEBP" ]; then
    echo "Error: cwebp not found at $CWEBP"
    exit 1
fi

# Usage helper
if [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
    echo "Usage: ./scripts/optimize_images.sh [file_to_optimize.png/jpg]"
    echo "If no arguments are provided, default hero assets and logos will be optimized."
    exit 0
fi

# If a specific file is passed
if [ -n "$1" ]; then
    if [ -f "$1" ]; then
        output_webp="${1%.*}.webp"
        echo "Optimizing $1 -> $output_webp..."
        $CWEBP -q 85 "$1" -o "$output_webp"
        echo "Done!"
    else
        echo "Error: File $1 does not exist."
    fi
    exit 0
fi

# Default run: optimize main assets if they exist
echo "Optimizing main hero background..."
if [ -f "$ASSETS_DIR/HeroBack.png" ]; then
    $CWEBP -q 85 "$ASSETS_DIR/HeroBack.png" -o "$ASSETS_DIR/HeroBack.webp"
else
    echo "HeroBack.png not found, skipping."
fi

echo "Optimizing portrait middle image (preserving alpha transparency)..."
if [ -f "$ASSETS_DIR/Todd-Middle.png" ]; then
    $CWEBP -q 85 "$ASSETS_DIR/Todd-Middle.png" -o "$ASSETS_DIR/Todd-Middle.webp"
else
    echo "Todd-Middle.png not found, skipping."
fi

echo "Optimizing logos..."
if [ -f "$ASSETS_DIR/LogoBLK.png" ]; then
    $CWEBP -q 90 "$ASSETS_DIR/LogoBLK.png" -o "$ASSETS_DIR/LogoBLK.webp"
else
    echo "LogoBLK.png not found, skipping."
fi

if [ -f "$ASSETS_DIR/LogoWHT.png" ]; then
    $CWEBP -q 90 "$ASSETS_DIR/LogoWHT.png" -o "$ASSETS_DIR/LogoWHT.webp"
else
    echo "LogoWHT.png not found, skipping."
fi

echo "Done! Optimized WebP assets generated."
