import React from "react";
import Header from "../../components/Header";
import Carousel from "./Carousel";
import MovieList from "./MovieList";
import CastList from "./CastList";
import Footer from "../../components/Footer";
import RankList from "./RankList";
import NewsCarousel from "./NewsCarousel";
import NewsList from "./NewsList";

export default function index() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="movie-rank-container">
        {/* Left side */}
        <div className="content-left">
          <div className="content">
            <h1 className="sub-title">New Arrival</h1>
            <MovieList />
          </div>
          <div className="content">
            <h1 className="sub-title">Your Watchlist</h1>
            <MovieList />
          </div>
        </div>
        {/* Right side */}
        <div className="content-right">
          <h1 className="sub-title">Top Movies</h1>
          <RankList />
        </div>
      </div>
      <div className="content">
        <h1 className="sub-title">Top Cast</h1>
        <CastList />
      </div>
      <div className="movie-rank-container">
        {/* Left side */}
        <div className="content-left">
          <h1 className="sub-title">Highlight News</h1>

          <NewsCarousel />
        </div>
        {/* Right side */}
        <div className="content-right">
          <h1 className="sub-title">News</h1>
          <NewsList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
