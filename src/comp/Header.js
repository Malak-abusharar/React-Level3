import React from "react";
import "./Header.css";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [user] = useAuthState(auth);
  const { theme, changeTheme } = useContext(DataContext);

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
            <p>Languge</p>
            <ul className="lang-box">
              <li dir="rtl">
                <p>العربية</p>
              {false && <i className="fa-solid fa-check"></i>}  
              </li>
              <li>
                <p>English</p>
              {true && <i className="fa-solid fa-check"></i>}  
              </li>
              <li>
                <p>French</p>
              {false && <i className="fa-solid fa-check"></i>}  
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
                Sign out
              </NavLink>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/about">
                About
              </NavLink>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/profile">
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
