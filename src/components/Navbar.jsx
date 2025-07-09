import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Ankit Kumar Singh</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-white"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
