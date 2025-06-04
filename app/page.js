"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", saved === "dark");
    setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle(`${newTheme}`);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    console.log(newTheme);
  };
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg shadow bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
