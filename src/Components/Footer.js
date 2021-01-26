import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Footer = () => {
  const scroll = () => window.scrollTo(0, 0);
  return (
    <div className="footer">
      <p>
        © All rights reserved ADG_ATELIER 2021
        <button onClick={scroll} className="up__icon">
          <ExpandLessIcon fontSize="large" />
        </button>
      </p>
      <p>Follow us on</p>
      <div className="footer__icons">
        <a
          href="https://www.facebook.com/ajayguru895"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/adg_atelier_895/?igshid=byi92o58fg70"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://chat.whatsapp.com/HYQnDrOxQJz66FH4kqLuSc"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
        </a>
        <a href="https://t.me/adg_atelier_895" target="_blank" rel="noreferrer">
          <TelegramIcon />
        </a>
      </div>
      <div className="footer__contacts">
        <p>Contact us</p>
        <a href="tel:+918285436490">
          <CallIcon />
        </a>
        <a href="mailto:ajayguru895@gmail.com">
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
