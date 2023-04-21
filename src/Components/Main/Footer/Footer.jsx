import React from "react";
import styles from "./Footer.module.scss";
import img from "./Images/path4.png";
import arrow from "./Images/Icon.png";
import { useTranslation } from "react-i18next";

const Footer = ({ handleClick }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.support}>
        <div className={styles.arrows}>
          <img src={img} alt="" />
          <img src={arrow} alt="" />
          <span onClick={handleClick}>{t("Support")}</span>
          <img src={arrow} alt="" />
        </div>
        <div>
          <p onClick={handleClick}>
            {t("iPhone Repair - Official Apple Support")}
          </p>
        </div>
      </div>
      <div className={styles.more}>
        <hr />
        <div>
          <p>{t("Product Support")}</p>
          <button onClick={handleClick}>+</button>
        </div>
        <hr />
        <div>
          <p>{t("Service and Repair")}</p>
          <button onClick={handleClick}>+</button>
        </div>
        <hr />
        <div>
          <p>{t("Resources")}</p>
          <button onClick={handleClick}>+</button>
        </div>
        <hr />
        <div>
          <p>{t("Connect")}</p>
          <button onClick={handleClick}>+</button>
        </div>
        <hr />
      </div>
      <div className={styles.foot}>
        <p>{t("United Kingdom")}</p>
        <div>
          <p>{t("Copyright © 2023 Apple Inc. All rights reserved.")}</p>
          <p className={styles.privacy}>
            Privacy Policy <span>|</span> Legal <span>|</span> Site Map
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
