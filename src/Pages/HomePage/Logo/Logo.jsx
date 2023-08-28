import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <div>
      <Link to={"/"}>
        <img
          className="Img__Logo"
          src={require("../../../Img/Header/Marketplace.png")}
          alt="Logo"
        />
      </Link>
    </div>
  );
}
export default Logo;
