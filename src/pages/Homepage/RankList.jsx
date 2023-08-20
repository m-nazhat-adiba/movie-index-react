import React from "react";
import RankCard from "../../components/common/RankCard";
import { movies } from "../../../dummy_data/movies";

export default function RankList() {
  return (
    <div>
      {movies.map((movie, key) =>
        key < 5 ? <RankCard data={movie} key={key} /> : null
      )}
    </div>
  );
}
