import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../useTheme";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div
      className="theme-toggle-pill"
      role="radiogroup"
      aria-label="Theme mode"
    >
      <button
        type="button"
        className={`theme-toggle-btn ${themeMode === "system" ? "active" : ""}`}
        onClick={() => setThemeMode("system")}
        aria-label="System theme"
        aria-checked={themeMode === "system"}
        role="radio"
        title="System theme"
      >
        <Monitor size={17} strokeWidth={1.8} />
      </button>
      <button
        type="button"
        className={`theme-toggle-btn ${themeMode === "light" ? "active" : ""}`}
        onClick={() => setThemeMode("light")}
        aria-label="Light theme"
        aria-checked={themeMode === "light"}
        role="radio"
        title="Light theme"
      >
        <Sun size={17} strokeWidth={1.8} />
      </button>
      <button
        type="button"
        className={`theme-toggle-btn ${themeMode === "dark" ? "active" : ""}`}
        onClick={() => setThemeMode("dark")}
        aria-label="Dark theme"
        aria-checked={themeMode === "dark"}
        role="radio"
        title="Dark theme"
      >
        <Moon size={17} strokeWidth={1.8} />
      </button>
    </div>
  );
}
