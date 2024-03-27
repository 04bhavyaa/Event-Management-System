// Form validation functions

function validateName(name) {
  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/; // Ensures first and last name format
  return nameRegex.test(name.trim()) || "Please enter a valid name (first and last)";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim()) || "Please enter a valid email address";
}

function validatePassword(password) {
  // Minimum length, at least one uppercase letter, one lowercase letter, one number, and one special character
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z]).{8,}$/;
  return (
    passwordRegex.test(password.trim()) ||
    "Password must be at least 8 characters long and include a lowercase letter, an uppercase letter, a number, and a special character"
  );
}

function validateMessage(message) {
  const minLength = 10; // Adjust minimum message length as needed
  return (
    message.trim().length >= minLength ||
    `Please enter a message with at least ${minLength} characters`
  );
}

// Usage examples (modify selectors and validation calls as needed)

// Contact form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  let errorMessage = "";

  if (!validateName(name)) {
    errorMessage += validateName(name) + "\n";
  }
  if (!validateEmail(email)) {
    errorMessage += validateEmail(email) + "\n";
  }
  if (!validateMessage(message)) {
    errorMessage += validateMessage(message) + "\n";
  }

  if (errorMessage) {
    alert(errorMessage);
    return; // Prevent form submission if validation fails
  }

  // Submit the form (replace with your form submission logic)
  console.log("Form submitted successfully!");
});

// Login form validation (assuming validation is done on client-side for basic checks)
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateEmail(email)) {
    errorMessage.textContent = validateEmail(email);
    return;
  }
  if (!validatePassword(password)) {
    errorMessage.textContent = validatePassword(password);
    return;
  }

  // Proceed with login logic (replace with your authentication mechanism)

  // ...
});

// Signup form validation (adapt validation calls based on your signup form fields)
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate signup form fields similar to login and contact forms
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // ... other signup fields

  // Perform validation checks and display errors if necessary
  // ...

  // Proceed with signup logic (replace with your user creation mechanism)

  // ...
});
