import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Members from "./Members";

const initialFormValues = {
  name: "",
  email: "",

  role: "",
};
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [teamMembers, setTeamMembers] = useState([]);
  console.log(teamMembers);
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
    setTeamMembers([...teamMembers, newMember]);

    setFormValues(initialFormValues);

    if (!newMember.username || !newMember.email || !newMember.role) return;
  };

  return (
    <div className="App">
      <h1>New Team Member</h1>
      <Form values={formValues} update={updateForm} submit={submitForm} />
      <Members memberInfo={teamMembers} />
    </div>
  );
}

export default App;
