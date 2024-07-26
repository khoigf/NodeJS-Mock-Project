/* public/js/scripts.js */
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username.length < 6 || username.length > 50 || password.length < 6 || password.length > 50) {
        alert('Username and password must be more than 6 and less than 50 characters');
        return;
    }

    // For example, you can use fetch API to send data to server
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          window.location.href = '/homepage.html';
      })
      .catch((error) => {
          console.error('Error:', error);
      });
});
