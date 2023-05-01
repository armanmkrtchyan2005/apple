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
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    navigate(`/recaptcha?clickid=${params.clickid}`);
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
