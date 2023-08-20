import React from "react";

export default function MovieCard(props) {
  return (
    <div className="card" key={props.data.id}>
      <img className="image" src={props.data.poster} />
      <div className="card-overlay card-gradient">
        <p className="card-title">{props.data.title}</p>
        <p className="card-text">{props.data.text}</p>
      </div>
    </div>
  );
}
