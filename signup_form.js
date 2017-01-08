var signupForm = document.getElementById('signup');
var lastName = document.getElementById('lastname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var birthdate = document.getElementById('birthdate');
var form = document.getElementById('form');
var valid;
signupForm.addEventListener('click', function(event) {
  event.preventDefault();
  var email = document.getElementById('email');
  var firstName = document.getElementById('firstname');
  var age = getAge(birthdate.value);
  function getAge(input) {
    var birthday = new Date(input);
    var today = new Date();
    var diff = today-birthday; // This is the difference in milliseconds
    return Math.floor(diff/31536000000); // Divide by 1000*60*60*24*365
  };

  var first = document.getElementById('first');
  var last = document.getElementById('last');
  var emailMsg = document.getElementById('email-msg');
  var passwordMsg = document.getElementById('password-msg');
  var birthdayMsg = document.getElementById('birthday-msg');


  /**
  * Check if users firstname is valid.  Input is not empty and is at least 2
  * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
  */
  if (!validator.isEmpty(firstName.value) && validator.isOfLength(firstName.value, 2)) {
    firstName.className = 'input valid';
    first.innerHTML = '&#10003';
    first.className = 'valid';
  } else {
    first.innerHTML = 'Please enter at least 2 characters';
    firstName.className = 'input invalid';
    first.setAttribute('class', 'firstname-error');
  }

  /**
   * Check if users firstname is valid.  Input is not empty and is at least 2 * characters long.   Not checking if the name is alphaNumeric as some
   * people have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(lastName.value) && validator.isOfLength(lastName.value, 2)) {
    lastName.className = 'input valid';
    last.innerHTML = '&#10003';
    last.className = 'valid';
  } else {
    lastName.className = 'input invalid';
    last.innerHTML = 'Please enter at least 2 characters';
    last.setAttribute('class', 'lastname-error');
  }

  /**
   * Check if user email is valid. Input is not empty and email address is
   * valid.
   */
  if (!validator.isEmpty(email.value) && validator.isEmailAddress(email.value)) {
    email.className = 'input valid';
    emailMsg.innerHTML = '&#10003';
    emailMsg.className = 'valid';
  } else {
    email.className = 'input invalid';
    emailMsg.innerHTML = 'Please enter at valid email address';
    emailMsg.setAttribute('class', 'email-error');
  }

  /**
   * Check if user password is valid. Input is not empty and is at least 6-8
   * chararters long
   */
  if (!validator.isEmpty(password.value) && (validator.isOfLength(password.value, 6)) && (validator.isLength(password.value, 8))) {
   password.className = 'input valid';
   passwordMsg.innerHTML = '&#10003';
   passwordMsg.className = 'valid';
  } else {
   password.className = 'input invalid';
   passwordMsg.innerHTML = 'Please enter at valid password';
   passwordMsg.setAttribute('class', 'password-error');
  }

  /**
   * Check if user date of birth is valid. Checks that the input is not
   * empty, that the birthday is before today and that it computes to a
   * minimum age of 18.
   */
  if (!validator.isEmpty(birthdate.value) && (validator.isDate(birthdate.value) && validator.isBeforeToday(birthdate.value)) && age >= 18) {
    birthdate.className = 'input valid';
    birthdayMsg.innerHTML = '&#10003';
    birthdayMsg.className = 'valid';
  } else {
    birthdate.className = 'input invalid';
    birthdayMsg.innerHTML = 'You must be older than 18';
    birthdayMsg.setAttribute('class', 'birthdate-error');
  }

  /**
   * Checks that validation are valid.  If they are it sets the
   * form.className to valid.
   */
  if (!validator.isEmpty(firstName) && validator.isOfLength(firstName, 2) && !validator.isEmpty(lastName) && validator.isOfLength(lastName, 2) && !validator.isEmpty(email) && validator.isEmailAddress(email) && !validator.isEmpty(password) && (validator.isOfLength(password, 6)) && (validator.isLength(password, 8)) && !validator.isEmpty(birthdate) &&
  validator.isDate(birthdate) && validator.isBeforeToday(birthdate) && (age >= 18)) {
    form.className = 'valid';
  }
});
