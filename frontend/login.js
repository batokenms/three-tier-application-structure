document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            showError('Both username and password are required.');
        } else {
            login(username, password);
        }
    });

    function showError(message) {
        errorDiv.textContent = message;
    }

    async function login(username, password) {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const result = await response.json();
            if (response.ok) {
                alert('Login successful!');
            } else {
                showError(result.message);
            }
        } catch (error) {
            showError('An error occurred. Please try again.');
        }
    }
});
