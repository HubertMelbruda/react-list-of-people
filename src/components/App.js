import React from "react";
import "./PeopleList";
import "./App.css";
import PeopleList from "./PeopleList";


const API = "https://randomuser.me/api/?results=21";


class App extends React.Component {
  state = {
    personData: "",
    personEmail: "",
    people: [],
  };

  apiData = {
    drawnPeople: [],
  }

  componentDidMount () {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const users = data.results;
        users.map(user => this.apiData.drawnPeople.push(user))
      })
  }

  handleDrawPerson = () => {
    let drawnPerson = [...this.apiData.drawnPeople] 

    const randomNumber = Math.floor(Math.random() * this.apiData.drawnPeople.length);

    drawnPerson = drawnPerson[randomNumber]
    
    const newPerson = {
      id: this.state.people.length + 1,
      personData: `${drawnPerson.name.title} ${drawnPerson.name.first} ${drawnPerson.name.last}`,
      personEmail: drawnPerson.email,
    }

    this.setState((prevState) => ({
      people: prevState.people.concat(newPerson)
    }))

  }

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
          <h2>Enter your data</h2>
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
              type="email"
              id="email"
              name="personEmail"
              value={this.state.personEmail}
              placeholder="johndoe@gmail.com"
              onChange={this.handlePersonEmailChange}
            />
          </label>
          <div className="buttonsContainer">
            <button className="addButton" onClick={this.handleAddPerson}>
              Add person
            </button>
            <button className="drawButton" onClick={this.handleDrawPerson}>Draw a person</button>
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
