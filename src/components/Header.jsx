import React, { useRef, useState } from "react";
import "./Header.css";
import translations from "../translations";


const Header = ({ lang, setLang }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  const logoRef = useRef(null);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <header className={darkMode ? "header dark" : "header"}>
      <div className="logo" ref={logoRef}>
        {t.logo}
      </div>

      <nav className={menuOpen ? "nav open" : "nav"} ref={navRef}>
        <ul>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              {t.home}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              {t.projects}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {t.contact}
            </a>
          </li>
        </ul>
      </nav>

      <div className="actions" ref={btnRef}>
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {lang === "en" ? "🇸🇦 عربي" : "🇬🇧 English"}
        </button>
      </div>
    </header>
  );
};

export default Header;
