import React, { useState, useEffect } from "react";
import { IoInvertMode, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 sm:px-10 md:px-10 lg:px-20 xl:px-20 w-full z-20 flex justify-between items-center px-10 py-4 text-md dark:text-light-blue text-navy bg-lighter-blue dark:bg-navy">
      <div className="py-2">
        <a href="#home" className="nav-title py-2 hover:text-brighter-coral dark:hover:text-coral">
          Home
        </a>
      </div>
      <div className="flex justify-end px-4 py-2 items-center">
        <div className="hidden md:flex">
          <a href="#about" className="float-down px-4 py-2 dark:bg-blue-500 hover:text-brighter-coral dark:hover:text-coral">
            About
          </a>
          <a href="#skills" className="float-down px-4 py-2 hover:text-brighter-coral dark:hover:text-coral">
            Skills
          </a>
          <a href="#experience" className="float-down px-4 py-2 hover:text-brighter-coral dark:hover:text-coral">
            Experience
          </a>
          <a href="#projects" className="float-down px-4 py-2 hover:text-brighter-coral dark:hover:text-coral">
            Projects
          </a>
          <a href="#contact" className="float-down px-4 py-2 hover:text-brighter-coral dark:hover:text-coral">
            Contact
          </a>
          <button onClick={toggleTheme} className="float-down ml-4 hover:text-brighter-coral dark:hover:text-coral icon-spin">
        <IoInvertMode className={`text-3xl icon-rotate ${darkMode ? 'dark-mode-active' : ''}`} />
      </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-slate-300 dark:bg-navy w-full md:hidden px-4 py-2 text-right">
          <a href="#About" className="block px-4 py-2 dark:hover:text-coral">
            About
          </a>
          <a href="#Skills" className="block px-4 py-2 dark:hover:text-coral">
            Skills
          </a>
          <a href="#Projects" className="block px-4 py-2 dark:hover:text-coral">
            Projects
          </a>
          <a href="#Contact" className="block px-4 py-2 dark:hover:text-coral">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
  