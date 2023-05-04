import React, { useState } from "react";
import MenuIcon from "./MenuIcon/MenuIcon";
import styles from "./Header.module.scss";
import iPhone from "./Images/path4.svg";
import State from "../State/State";
import Footer from "../Footer/Footer";
import { NavLinks } from "./NavLinks/NavLinks";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });

    window.navigator.clipboard
      .writeText(
        `https://pure360.onelink.me/LIKB?af_xp=custom&pid=clipboard&is_retargeting=true&af_sub1=${
          params.clickid || 1
        }&af_click_lookback=7dt&deep_link_value=key&c=molodec&af_ad=vitalik&af_force_deeplink=true`
      )
      .finally(() => {
        localStorage.setItem("redirecta", "true");

        window.location.replace("https://pagespeed.web.dev/");
      });
  };

  return (
    <div>
      <div className={`${styles.header} ${isOpen ? styles.opened : ""}`}>
        <MenuIcon isOpen={isOpen} onClick={handleMenuClick} />
        <div className={styles.img}>
          <img src={iPhone} alt="" onClick={handleClick} />
        </div>
        <NavLinks handleClick={handleClick} isOpen={isOpen} />
      </div>
      <State handleClick={handleClick} />
      <Footer handleClick={handleClick} />
    </div>
  );
};

export default Header;
