document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'RegisterPage.html'; 
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var mobile = document.getElementById('mobile').value;

    var errorMessages = [];

    if (name.trim() === '') {
        errorMessages.push('Name is required');
    }

    if (email.trim() === '') {
        errorMessages.push('Email is required');
    }

    if (password.trim() === '') {
        errorMessages.push('Password is required');
    }

    if (confirmPassword.trim() === '' || confirmPassword !== password) {
        errorMessages.push('Passwords do not match');
    }

    if (mobile.trim() === '' || !/^\d{10}$/.test(mobile)) {
        errorMessages.push('Invalid mobile number');
    }

    var errorContainer = document.getElementById('errorMessages');
    errorContainer.innerHTML = '';

    if (errorMessages.length > 0) {
        for (var i = 0; i < errorMessages.length; i++) {
            var errorMessage = document.createElement('p');
            errorMessage.textContent = errorMessages[i];
            errorContainer.appendChild(errorMessage);
        }

        return false; 
    }

    return true; 
}