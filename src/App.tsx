import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CraftCamp from "./components/CraftCamp";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.body.className = initialTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <CraftCamp />
        <Contact />
      </main>
    </>
  );
}

export default App;
