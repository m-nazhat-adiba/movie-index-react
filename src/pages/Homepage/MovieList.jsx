import React from "react";
import Slider from "react-slick";
import MovieCard from "../../components/common/MovieCard";
import { movies } from "../../../dummy_data/movies";

export default function MovieList() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        breakpoint: 768,
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
        {movies.map((movie, key) => (
          <MovieCard data={movie} key={key} />
        ))}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}
