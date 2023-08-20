import React from "react";

export default function CastCard(props) {
  return (
    <div className="cast-card">
      <img className="avatar" src={props.data.avatar} />
      <p className="cast-name">{props.data.name}</p>
    </div>
  );
}
