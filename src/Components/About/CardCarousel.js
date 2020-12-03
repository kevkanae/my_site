import React, { Component } from "react";
import "./about.css";
import ReactCardCarousel from "react-card-carousel";

let a = <p>Ive a Passion to Learn a lot Of programming languages</p>;
let b = <p>To make my sites as responsive and Pleasing as they can get</p>;
let c = <p>To also make a portfolio of all the ML/NN programs</p>;
let d = <p>To make apps efficient and worth using</p>;
let e = <p>Oh and, Anime is the best gift to mankind</p>;

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "80vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }

  static get CARD_STYLE() {
    return {
      height: "250px",
      width: "550px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#522546",
      color: "#FFF",
      fontFamily: "Mulish, sans-serif",
      fontSize: "18px",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  }

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div className="container" style={MyCarousel.CARD_STYLE}>
            {a}
            <h1>&lt; / &gt;</h1>
          </div>
          <div className="container" style={MyCarousel.CARD_STYLE}>
            {b}
            <img className="carouselimg" src="../Images/resp.png" alt="" />
          </div>
          <div className="container" style={MyCarousel.CARD_STYLE}>
            {c}
            <img className="carouselimg" src="../Images/ai.png" alt="" />
          </div>
          <div className="container" style={MyCarousel.CARD_STYLE}>
            {d}
            <img className="carouselimg" src="../Images/app.png" alt="" />
          </div>
          <div className="container" style={MyCarousel.CARD_STYLE}>
            {e}
            <img className="carouselimg" src="../Images/image.png" alt="" />
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel;
