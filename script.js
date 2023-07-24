function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const agentNumber = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value.trim();

    // Check if the agentNumber and password match the desired values
    if (agentNumber === 'a1004' && password === 'Prullenbak10@') {
        // Redirect to mission.html if the values match
        window.location.replace('mission.html');
    } else {
        // Show an error message on the screen if the values don't match
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Incorrect Agent Number or Password';
        errorMessage.style.color = 'red';
        errorMessage.style.fontWeight = 'bold';
        const formBox = document.querySelector('.form-box.login');
        formBox.appendChild(errorMessage);
        font-family="Poppins"
    }
}
