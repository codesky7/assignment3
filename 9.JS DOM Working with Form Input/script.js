var form = document.getElementById('myForm');
var nameField = document.getElementById('name');
var emailField = document.getElementById('email');
var passwordField = document.getElementById('password');
var confirmPasswordField = document.getElementById('confirmPassword');
var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');
var confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  
  if (nameField.value.trim() === '') {
    nameError.textContent = 'Name is required';
  } else if (!/^[a-zA-Z]+$/.test(nameField.value.trim())) {
    nameError.textContent = 'Name should only contain letters';
  }


  if (emailField.value.trim() === '') {
    emailError.textContent = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(emailField.value.trim())) {
    emailError.textContent = 'Invalid email address';
  }


  if (passwordField.value.length < 8) {
    passwordError.textContent = 'Password should be at least 8 characters long';
  } else if (!/[a-z]/.test(passwordField.value) || !/[A-Z]/.test(passwordField.value) || !/[0-9]/.test(passwordField.value)) {
    passwordError.textContent = 'Password should contain at least one uppercase letter, one lowercase letter, and one digit';
  }

 
  if (confirmPasswordField.value !== passwordField.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
  }
});
