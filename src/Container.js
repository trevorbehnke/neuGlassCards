import React from "react";
import Card from "./Card.js";
import "./css/Container.css";

function Container(props) {
  return (
    <div className="Container">
      <Card
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

export default Container;
