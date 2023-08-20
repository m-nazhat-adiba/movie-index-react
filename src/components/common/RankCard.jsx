import React from "react";

export default function RankCard(props) {
  return (
    <div className="rank-card">
      <div className="poster-container">
        <img className="poster" src={props.data.poster} />
      </div>
      <div>
        <h5 className="rank-title">{props.data.title}</h5>
        <p>2016</p>
      </div>
    </div>
  );
}
