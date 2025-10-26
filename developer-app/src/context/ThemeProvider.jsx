import { useState, useEffect,  } from "react";

const Theme = "light" | "dark";

export default function ThemeProvider () {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem(Theme) ;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

    const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const value = { theme, toggleTheme };

  return [value];
};
