import React, { Component } from "react";
import Tilt from "react-tilt";
import "./css/Box.css";
import Content from "./Content";

function Box(props) {
  return (
    <Tilt className="Box Tilt">
      <Content
        className="Tilt-inner"
        id={props.id}
        name={props.name}
        username={props.username}
        email={props.email}
        website={props.website}
      />
    </Tilt>
  );
}

export default Box;
