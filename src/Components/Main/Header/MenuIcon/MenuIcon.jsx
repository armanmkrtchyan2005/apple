import React from "react";
import "./MenuIcon.scss";

const MenuIcon = ({ isOpen, onClick = () => {} }) => {
  return (
    <div
      className={`menu-icon ${isOpen ? "open" : ""}`}
      onClick={onClick}
    ></div>
  );
};

export default MenuIcon;
