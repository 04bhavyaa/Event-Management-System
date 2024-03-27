const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change this port number

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Route handler for contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Process form data (e.g., send email notification, store in database)
  console.log(`Received contact form submission from: ${name} - ${email}`);
  console.log(`Message: ${message}`);

  // Send a success response to the client
res.send('Thank you for contacting EventEase! We will get back to you soon.');
});
