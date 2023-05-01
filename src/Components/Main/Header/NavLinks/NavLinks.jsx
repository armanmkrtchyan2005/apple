import React from "react";
import styles from "./NavLinks.module.scss";
import { useTranslation } from "react-i18next";

export const NavLinks = ({ isOpen, handleClick }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.NavLinks} ${!isOpen ? styles.hidden : ""}`}>
      <div className={styles.links}>
        <a onClick={handleClick}>{t("Mac")}</a>
        <a onClick={handleClick}>{t("iPad")}</a>
        <a onClick={handleClick}>{t("iPhone")}</a>
        <a onClick={handleClick}>{t("Watch")}</a>
        <a onClick={handleClick}>{t("AirPods")}</a>
        <a onClick={handleClick}>{t("TV & Home")}</a>
        <a onClick={handleClick}>{t("Only on Apple")}</a>
        <a onClick={handleClick}>{t("Support")}</a>
        <a onClick={handleClick}>{t("Where to Buy")}</a>
      </div>
    </div>
  );
};
