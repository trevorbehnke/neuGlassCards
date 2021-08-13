import React from "react";
import Box from "./Box.js";
import "./css/Card.css";

function Card(props) {
  return (
    <div className="Card">
      <Box
        id={props.id}
        name={props.name}
        job={props.job}
        phone={props.phone}
        email={props.email}
        country={props.country}
        avatar={props.avatar}
      />
    </div>
  );
}

export default Card;
