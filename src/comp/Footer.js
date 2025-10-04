import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { i18n } = useTranslation();
  if (i18n.language === "ar") {
    return (
      <div className="myfooter">
        <footer dir="rtl" className="malak">
          كورس الرياكت - المستوى الثالث
          <span>🧡</span>
        </footer>
      </div>
    );
  }

  if (i18n.language === "en") {
    return (
      <div className="myfooter">
        <footer className="malak">
          React Course - Level 3<span>🧡</span>
        </footer>
      </div>
    );
  }

  if (i18n.language === "fr") {
    return (
      <div className="myfooter">
        <footer className="malak">
          Cours React - Niveau 3<span>🧡</span>
        </footer>
      </div>
    );
  }
};

export default Footer;
