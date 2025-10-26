"use client";

import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="w-full py-8">
      <div className="max-w-3xl px-10 container mx-auto px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-[var(--color-text-secondary)] font-serif">
            Copyright 2025 Hailey Pan.
          </p>
          <button
            onClick={toggleTheme}
            className="p-2 hover:text-[var(--color-accent)] hover:scale-110 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FiMoon className="w-4 h-4 text-[var(--color-text-primary)]" />
            ) : (
              <FiSun className="w-4 h-4 text-[var(--color-text-primary)]" />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}
