// LoginForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { UserIcon } from '@heroicons/react/outline';

const LoginForm = ({ onSubmit }) => (
  <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
    {({ isSubmitting }) => (
     <div className='flex justify-center items-center h-screen bg-grey'>
      <Form className='border border-black rounded justify-center items-center p-10'>
        <UserIcon className='w-10 h-10 '/>
        
        <div className='m-10'>
          <Field className='rounded p-3' placeholder='Username' type="text" name="username" />
        </div>
        <div className='m-10'>
          <Field className='rounded p-3' placeholder='Password' type="password" name="password" />
        </div>
        <button className='' type="submit" disabled={isSubmitting}>
          Login
        </button>
      </Form>
      </div>
    )}
  </Formik>
);

export default LoginForm;
