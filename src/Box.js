import React, { Component } from "react";
import "./css/Box.css";
import Content from "./Content";

class Box extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }
  render() {
    return (
      <div className="Box">
        <Content />
      </div>
    );
  }
}

export default Box;
