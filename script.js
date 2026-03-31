document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const pass = document.getElementById('password').value;

        // Logs to browser console (F12 to see)
        console.log("Credentials recorded:", { email, pass });
        
        // Visual confirmation
        alert("Success: Sign-in data captured.");
    });
});