"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "corey-portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey);
    const nextTheme = savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : "light";

    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  const toggleTheme = () => {
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={isDark}
      title={`Switch to ${nextTheme} mode`}
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:border-moss/60 hover:text-moss focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 focus:ring-offset-paper"
    >
      {isDark ? (
        <Sun aria-hidden="true" className="h-4 w-4" />
      ) : (
        <Moon aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  );
}
