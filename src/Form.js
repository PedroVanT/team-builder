import React from "react";
import styled from "styled-components";

const FormSection = styled.form`
  border: 3px solid black;
  border-radius: 1%;
  text-align: center;
  min-height: 25vh;

  margin-left: 25%;
  margin-right: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 2px 2px black;

  label {
    display: flex;
    justify-content: center;
    padding: 2%;
    /* text-shadow: 1px 1px 1px black; */
  }
  label input {
    margin-left: 2%;
  }
  label select {
    margin-left: 2%;
  }
`;

const Form = (props) => {
  const { values, update, submit } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <FormSection className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <h3>New Member registration:</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="First and Last Name"
            maxLength="70"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="Enter an email"
            maxLength="90"
          />
        </label>
        <label>
          Role:
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">select role</option>
            <option value="Front-End Engineer">Front-End Engineer</option>
            <option value="Back-End Engineer">Back-End Engineer</option>
            <option value="Full Stack Engineer">Full Stack Engineer</option>
            <option value="Software Engineer in Test (QA Engineer)">
              Software Engineer in Test
            </option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Security Engineer">Security Engineer</option>
          </select>
        </label>
        <div className="submit">
          <button
            disabled={
              !values.name || !values.email || !values.role ? true : false
            }
          >
            submit
          </button>
        </div>
      </div>
    </FormSection>
  );
};

export default Form;
