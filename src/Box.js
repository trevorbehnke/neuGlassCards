import React from "react";
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
        job={props.job}
        phone={props.phone}
        email={props.email}
        country={props.country}
        avatar={props.avatar}
      />
    </Tilt>
  );
}

export default Box;
