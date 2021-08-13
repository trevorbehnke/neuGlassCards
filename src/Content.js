import React from "react";
import "./css/Content.css";

function Content(props) {
  return (
    <div className="Content">
      <h2>{props.id}</h2>
      <h1>{props.name}</h1>
      <h3>{props.job}</h3>
      <img alt="avatar" src={props.avatar} />
      <p>{props.phone}</p>
      <button>{props.email}</button>
      <h3>{props.country}</h3>
    </div>
  );
}

export default Content;
