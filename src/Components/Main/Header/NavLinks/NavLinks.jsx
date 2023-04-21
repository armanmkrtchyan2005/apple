import React from "react";
import styles from "./NavLinks.module.scss";
import { useTranslation } from "react-i18next";

export const NavLinks = ({ isOpen }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.NavLinks} ${!isOpen ? styles.hidden : ""}`}>
      <div className={styles.links}>
        <a href="/">{t("Mac")}</a>
        <a href="/">{t("iPad")}</a>
        <a href="/">{t("iPhone")}</a>
        <a href="/">{t("Watch")}</a>
        <a href="/">{t("AirPods")}</a>
        <a href="/">{t("TV & Home")}</a>
        <a href="/">{t("Only on Apple")}</a>
        <a href="/">{t("Support")}</a>
        <a href="/">{t("Where to Buy")}</a>
      </div>
    </div>
  );
};
