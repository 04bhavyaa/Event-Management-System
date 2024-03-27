// Fetch upcoming events from the database (using Node.js)
fetch('http://localhost:3000/events/upcoming')
    .then(response => response.json())
    .then(events => {
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p>${event.date}</p>
                `;
            document.querySelector('.upcoming-events').appendChild(eventCard);
        });
    })
    .catch(error => console.error(error));

// Handle login button clicks
const organizerLoginButton = document.getElementById('organizer-login');
organizerLoginButton.addEventListener('click', () => {
    // Redirect to organizer login page
});

const attendeeLoginButton = document.getElementById('attendee-login');
attendeeLoginButton.addEventListener('click', () => {
    // Redirect to attendee login page
});
