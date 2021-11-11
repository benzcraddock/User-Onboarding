import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";

import schema from './validation/formSchema';
import * as yup as from 'yup';

import axios from 'axios';

import User from './components/User';

// initial states
const initialFormValues = { username: '', password: '', email: '', tos: false  }
const initialFormErrors = { username: '', password: '', email: '', tos: false}

const initialUsers = [];

function App() {

  // states
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        // console.log(res);
        setUsers
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        // console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <Form
        values={formValues}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
      />

      { users.map(user => {
        return (
          <User
            
          />
        )
      }) }
    </div>
  );
}

export default App;
