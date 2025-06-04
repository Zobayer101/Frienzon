"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white">
      <button
        onClick={toggleTheme}
        className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded shadow"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
