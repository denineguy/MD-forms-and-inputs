var loginForm = document.getElementById('login');
loginForm.addEventListener('click', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var form = document.getElementById('form');
  var valid;
  /**
   * Assume that the form is valid if I don't want to do the final check at
   * the end
   */
  //form.className = 'valid';

  /**
   * Check if user email is valid. Input is not empty and email address is
   * valid.
   */
  if (validator.isEmpty(email)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isEmailAddress(email)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if user password is valid. Input is not empty and is at least 6-8
   * chararters long
   */
   if (validator.isEmpty(password)) {
     form.className = 'invalid';
   } else {
     valid = true;
   }

   if ((validator.isOfLength(password, 6)) && (validator.isLength(password, 8))) {
     valid = true;
   } else {
     form.className = 'invalid';
   }

    //[TODO][ADDCHECK FOR COMPUTING MINIMUM AGE]

    /**
     * Checks that validation are valid.  If they are it sets the *
     * form.className to valid.
     */
    if (!validator.isEmpty(email) && validator.isEmailAddress(email) && !validator.isEmpty(password) && (validator.isOfLength(password, 6)) && (validator.isLength(password, 8))) {
      form.className = 'valid';
    }
    //[TODO] [ADD CHECK FOR MININMUM AGE]

    //Another way to do this is to set form.className = 'valid' at the top. and it will only flip when form.className = invalid. Then the above check to ensure every validation is valid is not needed.  The only reason I am not doing that is because I do not want to set the default value to "valid"
});
