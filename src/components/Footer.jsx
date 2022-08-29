import React from "react";

import "./styles/Footer.css";

import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footerCont">
      <hr />

      <div className="footer">
        <div className="sLinks">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur blurF1" />
      <div className="blur blurF2" />
    </div>
  );
};

export default Footer;
