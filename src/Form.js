import React from "react";

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
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name
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
          Email
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
          Role
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">select role</option>
            <option value="Front-End Engineer">Front-End Engineer</option>
            <option value="Back-End Engineer">Back-End Engineer</option>
            <option value="Full Stack Engineer">Full Stack Engineer</option>
            <option value="Software Engineer in Test (QA Engineer)">
              Software Engineer in Test (QA Engineer)
            </option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Security Engineer">Security Engineer</option>
          </select>
        </label>
        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
