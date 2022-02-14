import React from "react";
import "./PeopleList";
import Form from "./Form";
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
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const users = data.results;
        users.map((user) => this.apiData.drawnPeople.push(user));
      })
      .catch((error) => console.log(error));
  }

  handleDrawPerson = () => {
    const randomNumber = Math.floor(
      Math.random() * this.apiData.drawnPeople.length
    );

    const drawnPerson = this.apiData.drawnPeople[randomNumber];

    const newPerson = {
      id: this.state.people.length + 1,
      personData: `${drawnPerson.name.title} ${drawnPerson.name.first} ${drawnPerson.name.last}`,
      personEmail: drawnPerson.email,
    };

    this.setState((prevState) => ({
      people: prevState.people.concat(newPerson),
    }));
  };

  handleChange = (event) => {
    const type = event.target.type;
    const name = event.target.name;

    if (type === "text") {
      const value = event.target.value;

      this.setState({
        [name]: value,
      });
    } else if (type === "email") {
      const value1 = event.target.value;
      this.setState({
        [name]: value1,
      });
    }
  };

  handleAddPerson = () => {
    const people = [...this.state.people];

    const person = {
      id: this.state.people.length + 1,
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
    this.setState({
      people: this.state.people.filter((person) => id !== person.id),
    });
  };

  render() {
    return (
      <>
        <div className="mainDiv">
          <h2>Enter your data</h2>
          <Form
            state={this.state}
            handleChange={this.handleChange}
          />
          <div className="buttonsContainer">
            <button className="addButton" onClick={this.handleAddPerson}>
              Add person
            </button>
            <button className="drawButton" onClick={this.handleDrawPerson}>
              Draw a person
            </button>
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