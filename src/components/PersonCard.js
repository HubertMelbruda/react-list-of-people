import React from "react";

const PersonCard = (props) => {
  return (
    <div className="personCard">
      <div>
        <h4>{props.personData}</h4>
        <p>{`e-mail: ${props.personEmail}`}</p>
      </div>
      <div >
        <button
          className="delButton"
          onClick={() => props.deletePerson(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
