import React from "react";
import style from "../style/Footer.module.css";
import { Link, Element } from "react-scroll";

function Footer() {
  return (
    <Element name="contact" id="contact" style={{ paddingTop: "220px" }}>
      <div className={style.footer_img_div}>
        <img src="././Chandrabhan_circle_img.png"></img>
      </div>
      <div className={style.footer_sec_header_div}>
        <p className={style.footer_section_heading}>CONTACT</p>
        <h1 className={style.footer_sec_head}>Contact With Me</h1>
      </div>
      <div className={style.contactInfo}>
        <p>Phone: +917753868133</p>
        <p>Email: prajapatichandrabhan333@gmail.com</p>
      </div>
    </Element>
  );
}

export default Footer;
