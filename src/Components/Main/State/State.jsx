import React from "react";
import styles from "./State.module.scss";
import iph from "./Images/iPhone 14.png";
import { useTranslation } from "react-i18next";

const State = ({ handleClick }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.state}>
      <img src={iph} alt="" />
      <div className={styles.firstBox}>
        <span>{t("If not resolved immediately, the ")}</span>
        <span className={styles.redTxt}>{t("13 Viruses ")}</span>
        <span>
          {t(
            "could Damage the system, Block your iPhone and Personal Data including Banking data might be stolen!"
          )}
        </span>
      </div>
      <span>
        {t("To Run Diagnostic and make Apple-certified iPhone Repair:")}
      </span>
      <div className={styles.thirdBox}>
        <div>
          <span className={styles.boldTxt}>{t("Step", { step: 1 })} </span>
          <span>{t("Click the button below")}</span>
        </div>
        <div>
          <span className={styles.boldTxt}>{t("Step", { step: 2 })} </span>
          <span>{t("Download the ")}</span>
          <span className={styles.blueTxt}>{t("“Apple-certified app” ")}</span>
          <span>
            {t("on the next page to completely eliminate the issues")}
          </span>
        </div>
      </div>

      <button onClick={handleClick}>{t("Remove Viruses")}</button>
    </div>
  );
};

export default State;
