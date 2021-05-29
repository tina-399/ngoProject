import React from "react";
import   {Carousel} from "react-responsive-carousel"
import "../styles/Carousel.css";
import girls from "../assets/images/girls.jpg"
import shea1 from "../assets/images/sheabutter1.jpg";
import paste1 from "../assets/images/groundnutpaste1.jpg";
 
export default () => (
  <Carousel autoPlay infiniteLoop>
    <div className="carousel1 carousel-container">
      {/* <img src={girls} alt=" women empower" /> */}
      <p>
        <h1>Catch them young and they <br/>shall be successful forever</h1>
        <h2>
          We serve as a catalyst of <br/> positive transformational journeys in the <br/>
          lives of women and young women
        </h2>
      </p>
    </div>

    <div className="carousel2 carousel-container">
      {/* <img src={shea1} alt="groundnut" /> */}
      <p>
        <h1>We create opportunites <br/> for women to excel</h1>
        <h2>
          We serve as pathway makers in <br/>the lives of women through creating <br/>
          ready markets for them
        </h2>
      </p>
    </div>

    <div className="carousel3 carousel-container">
      {/* <img src={paste1} alt=" sheaButter" /> */}
      <p>
        <h1>We have amazing products <br/> available for patronage</h1>
      </p>
    </div>
  </Carousel>
);



