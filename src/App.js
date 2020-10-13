import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const initialFormValues = {
  name: "",
  email: "",

  role: "",
};
function App() {
  // const [members, setMembers] = useState();
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    let newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newMember.username || !newMember.email || !newMember.role) return;
  };

  return (
    <div className="App">
      <h1>Working</h1>
      <Form values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
