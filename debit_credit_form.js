var creditCardForm = document.getElementById('submitCard');
creditCardForm.addEventListener('click', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var cardNumber = document.getElementById('card-number').value;
  var csvCode = document.getElementById('csvcode').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var form = document.getElementById('form');
  var date = year + "-" + month;
  var referenceDate = new Date(year, month, 0);
  var valid;
  /**
   * Assume that the form is valid if I don't want to do the final check at
   * the end
   */
  //form.className = 'valid';

  /**
   * Check if users name is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(name)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(name, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  if (validator.moreWordsThan(name, 1)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users credit card is valid.  Input is not empty and is a valid
   * card number.
   */
  if (validator.isEmpty(cardNumber)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isCreditCard(cardNumber, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if user csvCode is valid. Input is not empty and email address is
   * valid.
   */
  if (validator.isEmpty(csvCode)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isNumber(csvCode)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  if ((validator.isOfLength(csvCode, 3)) && (validator.isLength(csvCode,4))) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if user month is valid. Input is not empty.
   */
   if (validator.isEmpty(month)) {
     form.className = 'invalid';
   } else {
     valid = true;
   }

   /**
    * Check if the year is valid. Input is not empty.
    */
    if (validator.isEmpty(year)) {
      form.className = 'invalid';
    } else {
      valid = true;
    }

    /**
     * Check if the date is valid. Input is a valid date and is not and is not expired (is Not After Today);
     */
    if (validator.isDate(date)) {
      valid = true;
    } else {
      form.className = 'invalid';
    }

    if (validator.isAfterToday(referenceDate)) {
      valid = true;
    } else {
      form.className = 'invalid';
    }

    /**
     * Checks that validation are valid.  If they are it sets the *
     * form.className to valid.
     */
    if (!validator.isEmpty(name) && validator.isOfLength(name, 2) && validator.moreWordsThan(name, 1) && !validator.isEmpty(cardNumber) && validator.isCreditCard(cardNumber, 2) && !validator.isEmpty(csvCode) && validator.isNumber(csvCode) && (validator.isOfLength(csvCode, 3)) && (validator.isLength(csvCode,4)) && !validator.isEmpty(month) && !validator.isEmpty(year) && validator.isDate(date) && validator.isAfterToday(referenceDate)) {
        form.className = 'valid';
    }
    //[TODO] [ADD CHECK FOR MININMUM AGE]

    //Another way to do this is to set form.className = 'valid' at the top. and it will only flip when form.className = invalid. Then the above check to ensure every validation is valid is not needed.  The only reason I am not doing that is because I do not want to set the default value to "valid"
});
