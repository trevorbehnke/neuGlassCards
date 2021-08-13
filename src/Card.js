import React, { Component } from "react";
import Box from "./Box.js";
import "./css/Card.css";

function Card(props) {
  return (
    <div className="Card">
      <Box
        id={props.id}
        name={props.name}
        username={props.username}
        email={props.email}
        website={props.website}
      />
    </div>
  );
}

export default Card;
