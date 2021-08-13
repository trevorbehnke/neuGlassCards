import React from "react";
import faker from "faker";
import Container from "./Container.js";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Container
        id={faker.random.number()}
        name={faker.name.firstName()}
        job={faker.name.jobTitle()}
        phone={faker.phone.phoneNumber()}
        email={faker.internet.email()}
        country={faker.address.country()}
        avatar={faker.image.avatar()}
      />
      <Container
        id={faker.random.number()}
        name={faker.name.firstName()}
        job={faker.name.jobTitle()}
        phone={faker.phone.phoneNumber()}
        email={faker.internet.email()}
        country={faker.address.country()}
        avatar={faker.image.avatar()}
      />
      <Container
        id={faker.random.number()}
        name={faker.name.firstName()}
        job={faker.name.jobTitle()}
        phone={faker.phone.phoneNumber()}
        email={faker.internet.email()}
        country={faker.address.country()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
