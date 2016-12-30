var loginForm = document.getElementById('login');
var email = document.getElementById('email');
var password= document.getElementById('password');
email.addEventListener('keyup', function(event) {
  /**
   * Check if user email is valid. Input is not empty and email address is
   * valid.
   */

  if (validator.isEmailAddress(email.value) && !validator.isEmpty(email.value)) {
    email.setCustomValidity('');
  } else {
    email.setCustomValidity('Please fill out and provide a valid email address');
  }
});

password.addEventListener('keyup', function(event) {
  /**
   * Check if user password is valid. Input is not empty and is at least 6-8
   * chararters long
   */

if (( !validator.isEmpty(password) && validator.isOfLength(password.value, 6)) && (validator.isLength(password.value, 8))) {
     password.setCustomValidity('');
 } else {
   password.setCustomValidity('Please fill out and provide a password that is 6-8 characters.');
 }

  event.preventDefault();
})
