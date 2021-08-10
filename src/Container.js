import React, { Component } from "react";
import Card from "./Card.js";
import "./css/Container.css";

class Container extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }
  render() {
    return (
      <div className="Container">
        <Card />
      </div>
    );
  }
}

export default Container;
