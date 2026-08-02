/** Router / session keys for returning to a featured highlight after a gallery. */

export type PhotographyLocationState = {
  /** Land on this featured photo id when opening /photography */
  restoreFeaturedId?: string;
  /** Set when opening a gallery from a featured highlight */
  fromFeaturedId?: string;
};

export const PHOTO_RESTORE_KEY = "photography-restore-featured-id";

export function rememberFeaturedForReturn(featuredId: string) {
  try {
    sessionStorage.setItem(PHOTO_RESTORE_KEY, featuredId);
  } catch {
    /* private mode / blocked storage */
  }
}

export function consumeFeaturedReturnId(
  state: PhotographyLocationState | null | undefined,
): string | undefined {
  const fromState = state?.restoreFeaturedId;
  if (fromState) {
    try {
      sessionStorage.removeItem(PHOTO_RESTORE_KEY);
    } catch {
      /* ignore */
    }
    return fromState;
  }

  try {
    const stored = sessionStorage.getItem(PHOTO_RESTORE_KEY);
    if (stored) {
      sessionStorage.removeItem(PHOTO_RESTORE_KEY);
      return stored;
    }
  } catch {
    /* ignore */
  }

  return undefined;
}

export function clearFeaturedReturnId() {
  try {
    sessionStorage.removeItem(PHOTO_RESTORE_KEY);
  } catch {
    /* ignore */
  }
}
