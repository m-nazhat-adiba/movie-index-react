import React from "react";
import Slider from "react-slick";
import Banner from "./Banner";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <Banner />
        <Banner />
        <Banner />
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}
