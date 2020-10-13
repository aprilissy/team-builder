import React, { useState } from 'react';
import './App.css';
import TeamMate from './components/teamMate'
import Form from './components/form'

// Shape of state driving the form
const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

function App() {
  // initialize state
  const [teamMembers, setTeamMembers] = useState([]);

  // hold all values of form
  const [formValues, setFormValues] = useState(initialFormValues);

  // form state updater - use in onChange handler for form
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue, //takes name and value of input and updates 'formValues'
    });
  };

  const submitForm = () => {
    let newTeamMate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    // if a field is empty don't let it post to back end.
    if (!newTeamMate.name || !newTeamMate.email || !newTeamMate.role) return;
  }

  return (
    <div className="App">
      <h1 >Team Form App</h1>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {teamMembers.map((teamMate) => {
        return <TeamMate key={teamMate.id} details={teamMate} />
      })}

    </div>
  );
}

export default App;
