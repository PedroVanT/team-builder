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
            maxLength="30"
          />
        </label>
        <label>
          email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Enter an email"
            maxLength="50"
          />
        </label>
        <label>
          role
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">select role</option>
            <option value="">Front-End Engineer</option>
            <option value="">Back-End Engineer</option>
            <option value="">Full Stack Engineer</option>
            <option value="">Software Engineer in Test (QA Engineer) </option>
            <option value="">DevOps Engineer</option>
            <option value="">Security Engineer</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default Form;
