const express = require('express');
const app = express();
const mysql = require('mysql2');

// Your existing MySQL connection details

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "140405",
});

// Function to handle form submission
function handleSignup(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  // Validate data (optional, implement basic validation)
  // ...

  // Insert data into MySQL database
  const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  connection.query(sql, [name, email, password], (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500); // Internal server error
    } else {
      console.log('User registered successfully!');
      res.send('Registration successful!'); // Send success message
    }
  });
}

// Configure Express app
app.use(express.urlencoded({ extended: true })); // Parse form data

app.post('/signup', handleSignup); // Route for signup form submission

// Serve static files (optional)
app.use(express.static('public')); // Serve files from the 'public' directory

app.listen(5555, () => console.log('Server listening on port 5555'));
