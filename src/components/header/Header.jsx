import React from "react";
// import styles from "./Header.module.scss";
import "../header/Header.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ toggleDarkMode, darkMode }) {
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header className="header">
        <div>
          <a href="/">Logo</a>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admin/products">Admin</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {/* <button onClick={toggleDarkMode} className={styles.toggleBtn}>
              {darkMode ? (
                <FontAwesomeIcon icon="fa-solid fa-moon" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-user" />
              )}
            </button> */}
            <button onClick={toggleDarkMode} className="toggleBtn">
              {darkMode ? "Dark-Mode" : "Light Mode"}
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
