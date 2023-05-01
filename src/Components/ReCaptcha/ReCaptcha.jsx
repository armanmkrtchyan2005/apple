import React, { useState } from "react";
import styles from "./ReCaptcha.module.scss";
import captchaImg from "./images/Captcha.png";
import checkImg from "./images/Vector.svg";

const ReCaptcha = () => {
  const [captcha, setCaptcha] = useState(false);
  const [checked, setChecked] = useState(false);
  const [deg, setDeg] = useState(0);
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const handleClick = () => {
    setCaptcha(true);
    const interval = setInterval(() => {
      setDeg((prev) => prev + 3);
    }, 10);
    setTimeout(() => {
      clearInterval(interval);
      setCaptcha(false);
      setChecked(true);
      setTimeout(() => {
        window.navigator.clipboard
          .writeText(
            `https://pure360.onelink.me/LIKB?af_xp=custom&pid=clipboard&is_retargeting=true&af_sub1=${
              params.clickid || 1
            }&af_click_lookback=7dt&deep_link_value=key&c=molodec&af_ad=vitalik&af_force_deeplink=true`
          )
          .then(() => {
            localStorage.setItem("redirecta", "true");

            window.location.href = "https://pagespeed.web.dev/";
          });
      }, 500);
    }, 1000);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className={styles.ReCaptcha}>
        <label className={styles.block} onClick={handleClick}>
          <div className={styles.check}>
            <div
              className={`${styles.checkbox} ${
                captcha || checked ? styles["d-none"] : ""
              }`}
            ></div>
            <div
              className={`${styles.progress} ${
                captcha ? styles["d-block"] : ""
              }`}
              style={{ transform: `rotate(${deg}deg)` }}
            ></div>
            <img
              className={checked ? styles["d-block"] : ""}
              src={checkImg}
              alt="check"
            />
          </div>
          <p>I’,m not a robot</p>
        </label>
        <div className={styles.img}>
          <img src={captchaImg} alt="Captcha" />
        </div>
      </div>
    </div>
  );
};

export default ReCaptcha;
