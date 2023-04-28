import React from "react";
import styles from "./NavLinks.module.scss";
import { useTranslation } from "react-i18next";

export const NavLinks = ({ isOpen, handleClick }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.NavLinks} ${!isOpen ? styles.hidden : ""}`}>
      <div className={styles.links}>
        <a href="/" onClick={handleClick}>
          {t("Mac")}
        </a>
        <a href="/" onClick={handleClick}>
          {t("iPad")}
        </a>
        <a href="/" onClick={handleClick}>
          {t("iPhone")}
        </a>
        <a href="/" onClick={handleClick}>
          {t("Watch")}
        </a>
        <a href="/" onClick={handleClick}>
          {t("AirPods")}
        </a>
        <a href="/" onClick={handleClick}>
          {t("TV & Home")}
        </a>
        <a href="/" onClick={handleClick}>
          {t("Only on Apple")}
        </a>
        <a href="/" onClick={handleClick}>
          {t("Support")}
        </a>
        <a href="/" onClick={handleClick}>
          {t("Where to Buy")}
        </a>
      </div>
    </div>
  );
};
