require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const nodemailer = require('nodemailer');


// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../Client/dist')));

// Email configuration
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

// Function to send email
const sendReservationEmail = (data, res) => {
  const mailOptions = {
    from: emailUser, // Sender address
    to: 'neromustlearn@gmail.com', // Recipient address
    subject: 'New Reservation',
    text: `First name: ${data.firstName}\nEmail: ${data.email}\nGuest: ${data.guests}\nReservation: ${data.reservationType}\nDate: ${data.date}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Message sent: %s', info.messageId);
    res.send('Thanks for your reservation, ' + data.firstName);
  });
};

const sendContactEmail = (data, res) => {
  const mailOptions = {
    from: emailUser, // Sender address
    to: 'application.nero@gmail.com', // Recipient address
    subject: 'New Contact',
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Message sent: %s', info.messageId);
    res.send('Thanks for your message, ' + data.name);
  });
};

const handleReservation = (req, res) => {
  const data = {
    firstName: req.body.firstName,
    email: req.body.email,
    guests: req.body.guests,
    reservationType: req.body.reservationType,
    date: req.body.date,
  };
  sendReservationEmail(data, res);
};

const handleContact = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  sendContactEmail(data, res);
};

app.post('/', handleReservation);
app.post('/bottle-service', handleReservation);
app.post('/event', handleReservation);
app.post('/about', handleReservation); 

// Common handler for contact routes
app.post('/contact', (req, res) => {
  const formType = req.body.formType;

  if (formType === 'reservation') {
    handleReservation(req, res);
  } else if (formType === 'contact') {
    handleContact(req, res);
  } else {
    res.status(400).send('Invalid form type');
  }
});

// For all GET requests, send back the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});


