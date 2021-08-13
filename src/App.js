import React, { Component } from "react";
import Card from "./Card.js";
import Container from "./Container.js";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        {users.map((user) => (
          <Container
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            website={user.website}
          />
        ))}
      </div>
    );
  }
}

export default App;
