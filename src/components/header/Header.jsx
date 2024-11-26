import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleDarkMode, darkMode }) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header className={styles.header}>
        <div>
          <a href="">Logo</a>
          {console.log(styles)}
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <button onClick={toggleDarkMode} className={styles.toggleBtn}>
              {darkMode ? (
                <FontAwesomeIcon icon={faSun} style={{ color: "black" }} />
              ) : (
                <FontAwesomeIcon icon={faMoon} style={{ color: "black" }} />
              )}
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
