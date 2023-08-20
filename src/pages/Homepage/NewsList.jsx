import React from "react";
import RankCard from "../../components/common/RankCard";
import { dummyNews } from "../../../dummy_data/news";

export default function NewsList() {
  return (
    <div>
      {dummyNews.map((news, key) =>
        key < 5 ? <RankCard data={news} key={key} /> : null
      )}
    </div>
  );
}
