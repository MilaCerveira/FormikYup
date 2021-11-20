import React from 'react';
import './App.css';
import { Field, Form, Formik } from 'formik';

function App() {
  const handleSubmit = (values: any) => {

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
      </Form>
        )}

    </Formik>
    </div>
  );
}

export default App;
