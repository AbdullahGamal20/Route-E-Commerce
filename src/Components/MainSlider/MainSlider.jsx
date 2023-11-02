import React, { useContext } from "react";
import Slider from "react-slick";
import img1 from "../../assets/slider-image-1.jpeg";
import img2 from "../../assets/slider-image-2.jpeg";
import img3 from "../../assets/slider-image-3.jpeg";
import img4 from "../../assets/5.webp";
import img5 from "../../assets/4.jpg";
import "../../styles/mainSlider.css";
import { StoreContext } from "../../Context/StoreContext";

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid main_slider my-5 pt-5 ">
      <Slider {...settings}>
        <img src={img4} alt="Image" />
        <img src={img5} alt="Image" />
        <img src={img1} alt="Image" />
        <img src={img2} alt="Image" />
        <img src={img3} alt="Image" />
      </Slider>
    </div>
  );
}

export default MainSlider;
