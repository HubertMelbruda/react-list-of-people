import React from "react";
import "./PeopleList";
import "./App.css";
import PeopleList from "./PeopleList";

class App extends React.Component {
  state = {
    personData: "",
    personEmail: "",
    people: [],
  };

  handlePersonDataChange = (event) => {
    this.setState({
      personData: event.target.value,
    });
  };

  handlePersonEmailChange = (event) => {
    this.setState({
      personEmail: event.target.value,
    });
  };

  handleAddPerson = () => {
    const people = [...this.state.people];

    const person = {
      id: people.length + 1,
      personData: this.state.personData,
      personEmail: this.state.personEmail,
    };

    if (this.state.personData === "" || this.state.personEmail === "") {
      alert("Please fill in all fields.");
    } else {
      people.push(person);
    }

    this.setState({
      personData: "",
      personEmail: "",
      people,
    });
  };

  handleDeletePerson = (id) => {
    let people = [...this.state.people];

    people = people.filter((person) => id !== person.id);

    this.setState({
      people,
    });
  };

  render() {
    return (
      <>
        <div className="mainDiv">
          <h2>Enter the data</h2>
          <label>
            Name and surname:
            <input
              name="personData"
              type="text"
              value={this.state.personData}
              placeholder="John Doe"
              onChange={this.handlePersonDataChange}
            />
          </label>
          <label>
            e-mail:
            <input
              name="personEmail"
              type="email"
              value={this.state.personEmail}
              placeholder="johndoe@gmail.com"
              onChange={this.handlePersonEmailChange}
            />
          </label>
          <div className="buttonsContainer">
            <button className="addButton" onClick={this.handleAddPerson}>
              Add person
            </button>
            <button className="drawButton">Draw</button>
          </div>
          <PeopleList
            people={this.state.people}
            deletePerson={this.handleDeletePerson}
          />
        </div>
      </>
    );
  }
}

export default App;