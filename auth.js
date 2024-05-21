document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Simple authentication (for demonstration purposes)
    if (username === 'user' && password === 'password') {
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials');
    }
});

if (sessionStorage.getItem('loggedIn') !== 'true' && window.location.pathname !== '/login.html') {
    window.location.href = 'login.html';
}
