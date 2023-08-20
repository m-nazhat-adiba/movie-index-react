import React from "react";
import { casts } from "../../../dummy_data/cast";
import CastCard from "../../components/common/CastCard";
import Slider from "react-slick";

export default function CastList() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {casts.map((cast, key) => (
          <CastCard data={cast} key={key} />
        ))}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}
