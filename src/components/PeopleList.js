import React from "react";
// import "./PeopleList.css";
import PersonCard from "./PersonCard";

const PeopleList = (props) => {
  const peopleList = props.people.map((person) => (
    <PersonCard
      key={person.id}
      id={person.id}
      personData={person.personData}
      personEmail={person.personEmail}
      deletePerson={props.deletePerson}
    />
  ));
  return (
    <div className="peopleList">
      {peopleList}
    </div>
  );
};

export default PeopleList;
