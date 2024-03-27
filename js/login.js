const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Replace with server-side authentication logic (don't store passwords in plain text)
function authenticate(email, password) {
  // Simulate server-side authentication (replace with actual logic)
  // You should never store passwords in plain text. Hash them securely on the server.
  const credentials = [
    { email: 'bhavyajha1404@gmail.com', password: 'hash123' }, // Hashed password example
    { email: '04akshita04@gmail.com', password: 'hash456' }, // Hashed password example
    // ..
  ];
  return credentials.some(cred => cred.email === email && cred.password === password);
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const userType = document.getElementById('userType').value; // Hidden input for user type

  // Validate login credentials (server-side validation recommended)
  const validLogin = authenticate(email, password);

  if (validLogin) {
    // Login successful, redirect to appropriate dashboard
    if (userType === 'attendee') {
      window.location.href = "attendee-dashboard.html";
    } else if (userType === 'organizer') {
      window.location.href = "organizer-dashboard.html";
    } else {
      console.error('Invalid user type'); // Handle unexpected user type
    }
  } else {
    // Login failed
    errorMessage.textContent = 'Invalid email or password.';
  }
});
