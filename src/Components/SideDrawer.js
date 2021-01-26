import React, { useState } from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

function SideDrawer({ show, click }) {
  const [isActive, setIsActive] = useState("");
  const scroll = () => window.scrollTo(0, 0);

  return (
    <nav className={`sidedrawer ${show && "open"}`}>
      <Link
        className={`link ${isActive === "home" && "link--active"}`}
        to="/"
        onClick={(e) => {
          scroll();
          click();
          setIsActive("home");
        }}
      >
        <span>Home</span>
      </Link>
      <a
        href="/#service-part"
        className={`link ${isActive === "service" && "link--active"}`}
        onClick={(e) => {
          click();
          setIsActive("service");
        }}
      >
        <span>Our Services</span>
      </a>
      <a
        href="/#vision-part"
        className={`link ${isActive === "vision" && "link--active"}`}
        onClick={(e) => {
          click();
          setIsActive("vision");
        }}
      >
        <span>Our Vision</span>
      </a>
      <Link
        className={`link ${isActive === "blogs" && "link--active"}`}
        onClick={(e) => {
          click();
          setIsActive("blogs");
        }}
        to="#"
      >
        <span>Blogs</span>
      </Link>
      <Link
        className={`link ${isActive === "contact" && "link--active"}`}
        to="/contact"
        onClick={(e) => {
          click();
          setIsActive("contact");
        }}
      >
        <span>Contact Us</span>
      </Link>
    </nav>
  );
}

export default SideDrawer;
