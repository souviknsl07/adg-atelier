import React, { useState } from "react";
import Hamburger from "./Hamburger";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

function Header({ drawerClickHandler }) {
  const [isActive, setIsActive] = useState("");
  const history = useHistory();

  const scroll = () => window.scrollTo(0, 0);

  return (
    <nav className="header">
      <div className="header__logo">
        <img
          onClick={(e) => {
            scroll();
            history.push("/");
            setIsActive("home");
          }}
          src="logo.png"
          alt=""
        />
      </div>
      <div>
        <Hamburger click={drawerClickHandler} />
      </div>
      <div className="header__links">
        <Link
          className={`link ${isActive === "home" && "link--active"}`}
          onClick={(e) => {
            scroll();
            setIsActive("home");
          }}
          to="/"
        >
          <span>Home</span>
        </Link>

        <a
          className={`link ${isActive === "services" && "link--active"}`}
          onClick={(e) => {
            setIsActive("services");
          }}
          href="/#service-part"
        >
          <span>Our Services</span>
        </a>

        <a
          href="/#vision-part"
          className={`link ${isActive === "vision" && "link--active"}`}
          onClick={(e) => {
            setIsActive("vision");
          }}
        >
          <span>Our Vision</span>
        </a>

        <a
          className={`link ${isActive === "blogs" && "link--active"}`}
          onClick={(e) => {
            setIsActive("blogs");
          }}
          href="https://adgatelier.blogspot.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Blogs</span>
        </a>

        <Link
          // className={`link ${isActive === "contact" && "link--active"}`}
          onClick={(e) => {
            setIsActive("contact");
          }}
          to="/contact"
        >
          <button className="header__button">
            <span>Contact Us</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
