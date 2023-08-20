import React from "react";
import NewsBanner from "./NewsBanner";
import Slider from "react-slick";

export default function NewsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <NewsBanner />
        <NewsBanner />
        <NewsBanner />
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}
