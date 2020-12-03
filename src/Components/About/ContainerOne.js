import React from "react";
import "./about.css";
import MyCarousel from "./CardCarousel.js";

export default function One() {
  return (
    <div>
      <div className="top-container">
        <div>
          <img className="myFace" src="../Images/Me.png" alt="Me" />
        </div>
        <h5 className="MyName">Kevin Daniel Goveas</h5>
        <p>
          <a href="mailTo:kevkanae777@gmail.com">kevkanae777@gmail.com</a>
        </p>
      </div>
      <div className="second-container">
        <h6>ABOUT</h6>
        <p>
          Hi, I'm Kevin. I love building Flutter Apps and Web Apps. I'm Curently
          a Third Year Computer Science, B.E Student
        </p>
      </div>
      <hr />
      <div className="cardcarousel">
        <MyCarousel />
      </div>
    </div>
  );
}
