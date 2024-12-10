import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './modal.css';
import Button from '../Buttons/Button.jsx'; // Ensure this component is correctly defined
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton'; // Import LoadingButton
import SendIcon from '@mui/icons-material/Send';
import { CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  guests: Yup.number()
    .required('Number of guests is required')
    .min(1, 'Number of guests must be at least 1')
    .max(20, 'Number of guests cannot exceed 20'),
  date: Yup.date().required('Date is required'),
});

const MyModal = ({ show, onHide }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');
  

  const initialValues = {
    firstName: '',
    email: '',
    guests: '',
    reservationType: '',
    date: '',
    formType: 'reservation' 
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://localhost:5000/', values);
      if (response.status === 200) {
        setEmailSent(true);
      }
    } catch (err) {
      setError('Error sending email');
      console.error(err);
    }
    setSubmitting(false);
  };

  const handleClose = () => {
    setEmailSent(false);
    onHide();
  };

  if (emailSent) {
    
    console.log('email has been sent')
    return (
      <Modal show={show} onHide={onHide} >
        <Modal.Body className='modal-body modal-reserve'>
          <CheckCircleIcon fontSize="large" sx={{color: 'rgb(49, 25, 107)', fontSize: "80px"}}/>
          <h4>Thank You reserving a place! You will receive a confirmation email shortly </h4>
         
          <Button name='Close' onClick={handleClose} />
        </Modal.Body>
      </Modal>
    );
  
  }

  return (

    
    <Modal show={show} onHide={onHide} >
      <Modal.Body className='modal-body'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='modal-form'>
              <h3>Reservation Form</h3>
              <Field type="hidden" name="formType" value="reservation"/>
              <div className="mb-3">
                <Field name="firstName" type="text" className='form-control modal-input-box' placeholder='First name' required />
                <ErrorMessage name="firstName" component="div" className="error-message" />
              </div>
              <div className="mb-3">
                <Field name="email" type="email" className='form-control modal-input-box' placeholder='Email' required />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="mb-3">
                <Field name="guests" type="number" className='form-control modal-input-box' placeholder='Number of Guests' required />
                <ErrorMessage name="guests" component="div" className="error-message" />
              </div>
              <div className="mb-3">
                <Field as="select" name="reservationType" className='form-select modal-input-box' required>
                  <option value="" disabled>Select reservation type</option>
                  <option value="Regular">Regular</option>
                  <option value="VIP">VIP</option>
                </Field>
                <ErrorMessage name="reservationType" component="div" className="error-message" />
              </div>
              <div className="mb-3">
                <Field name="date" type="date" className='form-control modal-input-box' required />
                <ErrorMessage name="date" component="div" className="error-message" />
              </div>
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                startIcon={<SendIcon  />}
                variant="contained"
                sx={{color: 'white', backgroundColor: '#EC53B0', display: 'flex', mx: 'auto' 
               , '&:hover': {
                backgroundColor: ' rgb(49, 25, 107)', color: 'white'  // Darker background color on hover
              },}}
              
                 loadingIndicator={
                 <CircularProgress  sx={{ color: 'rgb(49, 25, 107)' }} size={24} />
      }
              >
                Make booking
              </LoadingButton>
              {error && <p className="error-message">{error}</p>}
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
    
  );
  
};

export default MyModal;
