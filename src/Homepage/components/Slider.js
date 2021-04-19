import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../Shared/img/front 1.jpg";
import Slider2 from "../../Shared/img/front 2.jpg";
import Slider3 from "../../Shared/img/front 3.jpg";
import "./Slider.css";
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button'

const Slider = () => {
  return (
    <Carousel data-aos="fade-down">
      <Carousel.Item>
        <img className="d-block sliderimage" src={Slider1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block sliderimage" src={Slider2} alt="Second slide" />

      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block sliderimage" src={Slider3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
