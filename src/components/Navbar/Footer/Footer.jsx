import React from "react";
import "./Footer.css";
import { assets } from "../../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="foooter">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid at
            repellat tempore illo sed recusandae voluptatum suscipit nostrum,
            dolorum, ducimus minus, numquam aut neque nesciunt culpa soluta
            cumque beatae reiciendis.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Private policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>anushkagupta384@gmail.com</li>
            <li>Noida,Uttar Pradesh-201301</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 0 Tomato.com -All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
