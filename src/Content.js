import React, { Component } from "react";
import "./css/Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }
  render() {
    return (
      <div className="Content">
        <h2>01</h2>
        <h3>Card One</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minima
          quidem. Minus, eum temporibus! Id at et velit odit dolor.
        </p>
        <a href="#">Read More</a>
      </div>
    );
  }
}

export default Content;
