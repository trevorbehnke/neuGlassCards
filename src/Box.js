import React, { Component } from "react";
import Tilt from "react-tilt";
import "./css/Box.css";
import Content from "./Content";

class Box extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }
  render() {
    return (
      <Tilt className="Box Tilt">
        <Content className="Tilt-inner" />
      </Tilt>
    );
  }
}

export default Box;
