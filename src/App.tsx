import React from 'react';
import './App.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

const SigninSchema = Yup.object().shape({
email: Yup.string()
.required("Email address is required")
.email("This is not a valid email address"),
password: Yup.string().required("Password is required").min(8, "Password must be atleast 8 characters")
});

function App() {
  const handleSubmit = (values: any) => {
    console.log(`Email: ${values.email}. Password: ${values.password}`)
  }
  return (
    <div className="App">
    <Formik
    initialValues = {{ email: '', password: ""}}
    onSubmit={handleSubmit}
    validationSchema={SigninSchema}
    >
      {(props: any) => ( <Form> 
        <div>
          <label htmlFor="email">Email: </label>
          <Field name="email" />
          <ErrorMessage name="email"/>
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
