import React from "react";

const Form = (props) => {
  return (
    <React.Fragment>
      <label htmlFor="person">
        Name and surname:
        <input
          type="text"
          id="person"
          name="personData"
          value={props.state.personData}
          placeholder="John Doe"
          onChange={props.handleChange}
        />
      </label>

      <label htmlFor="email">
        e-mail:
        <input
          type="email"
          id="email"
          name="personEmail"
          value={props.state.personEmail}
          placeholder="johndoe@gmail.com"
          onChange={props.handleChange}
        />
      </label>
    </React.Fragment>
  );
};

export default Form;
