import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "system" | "light" | "dark";
export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function getStoredThemeMode(): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "system" || stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // private mode / blocked storage
  }
  return "system";
}

export function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolveTheme(mode: ThemeMode = getStoredThemeMode()): Theme {
  if (mode === "system") {
    return systemTheme();
  }
  return mode;
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
}

export function useTheme() {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof document === "undefined") return "system";
    return getStoredThemeMode();
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    return resolveTheme(getStoredThemeMode());
  });

  const setThemeMode = useCallback((nextMode: ThemeMode) => {
    try {
      localStorage.setItem(STORAGE_KEY, nextMode);
    } catch {
      // ignore
    }
    const resolved = resolveTheme(nextMode);
    applyTheme(resolved);
    setThemeModeState(nextMode);
    setThemeState(resolved);
  }, []);

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeMode(next);
    },
    [setThemeMode]
  );

  const toggleTheme = useCallback(() => {
    setThemeMode(theme === "dark" ? "light" : "dark");
  }, [theme, setThemeMode]);

  // Follow OS theme when themeMode is "system".
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onSystemChange = () => {
      if (themeMode !== "system") return;
      const next = systemTheme();
      applyTheme(next);
      setThemeState(next);
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, [themeMode]);

  return {
    themeMode,
    setThemeMode,
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === "dark",
  };
}

