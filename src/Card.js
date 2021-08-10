import React, { Component } from "react";
import Box from "./Box.js";
import "./css/Card.css";
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Card extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="Card">
        <Box />
      </div>
    );
  }
}

export default Card;
