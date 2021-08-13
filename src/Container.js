import React, { Component } from "react";
import Card from "./Card.js";
import "./css/Container.css";

function Container(props) {
  return (
    <div className="Container">
      <Card
        id={props.id}
        name={props.name}
        username={props.username}
        email={props.email}
        website={props.website}
      />
    </div>
  );
}

export default Container;
