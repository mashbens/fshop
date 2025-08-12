"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface DarkModeToggleProps {
  isDark: boolean;
  toggle: () => void;
  className?: string;
}

export const DarkModeToggle = ({ 
  isDark, 
  toggle,
  className = "" 
}: DarkModeToggleProps) => {
  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-lg transition-colors duration-200 ${
        isDark 
          ? "bg-gray-700 hover:bg-gray-600 text-yellow-300" 
          : "bg-gray-200 hover:bg-gray-300 text-gray-700"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};