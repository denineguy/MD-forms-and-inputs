var signupForm = document.getElementById('signup');
signupForm.addEventListener('click', function(event) {
  event.preventDefault();
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var birthdate = document.getElementById('birthdate').value;
  var form = document.getElementById('form');
  var age = getAge(birthdate);
  var valid;
  function getAge(input) {
    var birthday = new Date(input);
    var today = new Date();
    var diff = today-birthday; // This is the difference in milliseconds
    return Math.floor(diff/31536000000); // Divide by 1000*60*60*24*365
  };

  /**
   * Assume that the form is valid if I don't want to do the final check at
   * the end
   */
  //form.className = 'valid';

  /**
   * Check if users firstname is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(firstName)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(firstName, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users firstname is valid.  Input is not empty and is at least 2 * characters long.   Not checking if the name is alphaNumeric as some
   * people have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(lastName)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(lastName, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

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

   /**
    * Check if user date of birth is valid. Checks that the input is not
    * empty, that the birthday is before today and that it computes to a
    * minimum age of 18.
    */
    if (validator.isEmpty(birthdate)) {
      form.className = 'invalid';
    } else {
      valid = true;
    }

    if (validator.isDate(birthdate)) {
      valid = true;
    } else {
      form.className = 'invalid';
    }

    if (validator.isBeforeToday(birthdate)) {
      valid = true;
    } else {
      form.className = 'invalid';
    }

    if (age >= 18) {
      valid = true;
    } else {
      form.className = 'invalid';
    }

    /**
     * Checks that validation are valid.  If they are it sets the *
     * form.className to valid.
     */
    if (!validator.isEmpty(firstName) && validator.isOfLength(firstName, 2) && !validator.isEmpty(lastName) && validator.isOfLength(lastName, 2) && !validator.isEmpty(email) && validator.isEmailAddress(email) && !validator.isEmpty(password) && (validator.isOfLength(password, 6)) && (validator.isLength(password, 8)) && !validator.isEmpty(birthdate) &&
    validator.isDate(birthdate) && validator.isBeforeToday(birthdate) && (age >= 18)) {
      form.className = 'valid';
    }

    //Another way to do this is to set form.className = 'valid' at the top. and it will only flip when form.className = invalid. Then the above check to ensure every validation is valid is not needed.  The only reason I am not doing that is because I do not want to set the default value to "valid"
});
