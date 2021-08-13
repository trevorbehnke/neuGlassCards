import React, { Component } from "react";
import "./css/Content.css";

function Content(props) {
  return (
    <div className="Content">
      <h1>{props.id}</h1>
      <h2>{props.name}</h2>
      <h3>{props.username}</h3>
      <h4>{props.email}</h4>
      <h5>{props.website}</h5>
    </div>
  );
}

export default Content;
