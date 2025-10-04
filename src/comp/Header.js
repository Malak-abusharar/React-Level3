import React from "react";
import "./Header.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18n";
const Header = () => {
  const [user] = useAuthState(auth);
  const { theme, changeTheme } = useContext(DataContext);
const { t} = useTranslation();
  return (
    <div className="myheader">
      <header className="hide-when-mobile malak">
        <h1>
          <Link to="/">React Course</Link>
        </h1>
        <button
          className="th"
          onClick={() => {
            changeTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme}
        </button>
        <ul className="flex">
          <li className="main-list lang">
            <p>    {t(`lang`)}</p>
            <ul className="lang-box">
              <li onClick={() => {
                // @ts-ignore
                i18n.changeLanguage("ar")
              }
              }
              dir="rtl">
                <p>العربية</p>
              {i18n.
// @ts-ignore
              language ==="ar" && <i className="fa-solid fa-check"></i>}  
              </li>
              <li  onClick={() => {
                // @ts-ignore
                i18n.changeLanguage("en")
              }
              } >
                <p>English</p>
              {i18n.
// @ts-ignore
              language ==="en" && <i className="fa-solid fa-check"></i>}  
              </li>
              <li   onClick={() => {
                // @ts-ignore
                i18n.changeLanguage("fr")
              }
              }>
                <p>French</p>
              {i18n.
// @ts-ignore
              language ==="fr" && <i className="fa-solid fa-check"></i>}  
              </li>
            </ul>
          </li>
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Signup">
                Sign up
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Signin">
                Sign in
              </NavLink>
            </li>
          )}
          {user && (
            <li
              className="main-list"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    console.log("done");
                  })
                  .catch((error) => {
                    // An error happened.
                    console.log("error");
                  });
              }}
            >
              <NavLink className="main-link" to="/signin">
                {/* Sign out */}
                {t(`signout`)}
              </NavLink>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/about">
                 {t(`about`)}
              </NavLink>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/profile">
                  {t(`account`)}
              </NavLink>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
