import React, {Component} from "react";
import "./about.css";
import ReactCardCarousel from "react-card-carousel";
import ReactPic from "./Images/ReactPic.png";
import App from "./Images/app.png";
import Anime from "./Images/naruto.png";

const imgStyle = {
    width: "100",
    height: "100"
}

let b = <p>I love building Flutter Apps</p>;
let c = <p>Web Development using React and/or Node.js</p>;
let d = <p>A novice Full-Stack Dev</p>;
let e = <p>A N I M E ╰( ͡° ͜ʖ ͡° )つ──☆</p>;


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
            background: "#3D1430",
            color: "#FFF",
            fontFamily: "Mulish, sans-serif",
            fontSize: "18px",
            borderRadius: "49px",
            boxSizing: "border-box",
        };
    }

    render() {
        return (
            <div style={MyCarousel.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
                    <div className="container" style={MyCarousel.CARD_STYLE}>
                        {b}
                        <img className="carouselimg" src={App} alt="" style={imgStyle}/>
                    </div>
                    <div className="container" style={MyCarousel.CARD_STYLE}>
                        {c}
                        <img className="carouselimg" src={ReactPic} alt="" style={imgStyle}/>
                    </div>
                    <div className="container" style={MyCarousel.CARD_STYLE}>
                        {d}

                    </div>
                    <div className="container" style={MyCarousel.CARD_STYLE}>
                        {e}
                        <img className="carouselimg" src={Anime} alt="" style={imgStyle}/>
                    </div>
                </ReactCardCarousel>
            </div>
        );
    }
}

export default MyCarousel;
