import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from '../Buttons/Button.jsx';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send'; // Import SendIcon
import './ContactData.css';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton'; // Import LoadingButton
import { CircularProgress } from '@mui/material';


const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    message: '',
    formType: 'contact',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000/contact', values);
      if (response.status === 200) {
        setEmailSent(true);
      }
    } catch (err) {
      setError('Error sending email');
      console.error(err);
    }
    setSubmitting(false);
  };

  return (
    <div className='form-main'>
      {emailSent ? (
        <Alert severity="success" icon={<CheckIcon fontSize="inherit" />}>
          Form submitted successfully!
        </Alert>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className=''>
              <h1>Contact Form</h1>
              <Field type="hidden" name='formType' value="contact" />
              <div className='form-group mb-3'>
                <Field type="text" name="name" id="name" className="form-control" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className='form-group mb-3'>
                <Field type="text" name="email" id="email" className="form-control" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className='form-group mb-3'>
                <Field as="textarea" name="message" id="message" className="form-control text-area" placeholder="Message" />
                <ErrorMessage name="message" component="div" className="error" />
              </div>
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                startIcon={<SendIcon />}
                variant="contained"
                sx={{
                  color: 'white', 
                  backgroundColor: '#EC53B0', 
                  display: 'flex', 
                  mx: 'auto', 
                  '&:hover': {
                    backgroundColor: ' rgb(49, 25, 107)', 
                    color: 'white'
                  },
                }}
                loadingIndicator={
                  <CircularProgress sx={{ color: 'rgb(49, 25, 107)' }} size={24} />
                }
              >
                Submit
              </LoadingButton>
              {error && <Alert severity="error">{error}</Alert>}
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
