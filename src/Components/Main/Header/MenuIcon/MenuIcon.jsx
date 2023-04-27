import React from "react";
import "./MenuIcon.scss";

const MenuIcon = ({ isOpen, onClick = () => {} }) => {
  return (
    <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={onClick}>
      <div className="after"></div>
      <div className="before"></div>
    </div>
  );
};

export default MenuIcon;
