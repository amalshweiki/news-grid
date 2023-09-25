import React from "react";
import logo from "../image_resources/logo.png";
import "../style/headerStyle.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <>
      <nav id="main-nav">
        <div className="container">
          <img src={logo} alt="NewsGrid" className="logo" />
          <div className="social">
            <Link to="http://facebook.com " target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </Link>
            <Link to="http://twitter.com" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </Link>
            <Link to="http://instagram.com" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
            <Link to="http://youtube.com" target="_blank">
              <i className="fab fa-youtube fa-2x"></i>
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/" className="current">
                Home
              </Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default header;
