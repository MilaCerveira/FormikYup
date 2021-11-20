import React from 'react';
import './App.css';
import { Field, Form, Formik } from 'formik';

function App() {
  const handleSubmit = (values: any) => {
    console.log(`Email: ${values.email}. Password: ${values.password}`)
  }
  return (
    <div className="App">
    <Formik
    initialValues = {{ email: '', password: ""}}
    onSubmit={handleSubmit}
    >
      {(props: any) => ( <Form> 
        <div>
          <label htmlFor="email">Email: </label>
          <Field name="email" />
          </div>
          <div>
          <label htmlFor="password">Password: </label>
          <Field name="password" />
          </div>
          <button type="submit">Submit</button>
      </Form>
        )}

    </Formik>
    </div>
  );
}

export default App;
