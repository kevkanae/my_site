import React from "react";
import "./about.css";
import MyCarousel from "./CardCarousel.js";
import Me from "./Images/Me.png";
import Github from "./Images/g.png";
import Instagram from "./Images/i.png";
import LinkedIN from "./Images/l.png";

export default function One() {
  return (
    <div>
      <div className="top-container">
        <div>
          <img className="myFace" src={Me} alt="Me" />
        </div>
        <h5 className="MyName">Kevin Daniel Goveas</h5>
        <p>
          <a href={"mailTo:kevkanae777@gmail.com"}>kevkanae777@gmail.com</a>
        </p>
      </div>
      <div className="second-container">
        <h6>Contact Me</h6>
          <ul id="menu">
              <li><a href={'https://github.com/kevkanae'}><img src={Github} alt=""/></a></li>
              <li><a href={'https://www.instagram.com/kev.kanae/'}><img src={Instagram} alt=""/></a></li>
              <li><a href={'https://www.linkedin.com/in/kevkanae/'}><img src={LinkedIN} alt=""/></a></li>

          </ul>
      </div>
      <hr />
      <div className="cardcarousel">
        <MyCarousel />
      </div>
    </div>
  );
}
