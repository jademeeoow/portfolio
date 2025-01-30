import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Me from "./components/about_me";
import Ido from "./components/whatido";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <>
      <Header />
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <Hero />
      <Me />
      <Ido />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
