import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggler() {
  if (typeof window === "undefined") return null;

  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const bodyClassList = window.document.body.classList;
    isDarkMode ? bodyClassList.add("dark") : bodyClassList.remove("dark");
  });

  return (
    <button onClick={toggleDarkMode}>{isDarkMode ? <Sun /> : <Moon />}</button>
  );
}