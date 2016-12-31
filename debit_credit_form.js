var creditCardForm = document.getElementById('submitCard');
function checkForm(event) {
  event.preventDefault();
  var name = document.getElementById('name');
  var cardNumber = document.getElementById('card-number');
  var csvCode = document.getElementById('csvcode');
  var month = document.getElementById('month');
  var year = document.getElementById('year');
  var form = document.getElementById('form');
  var date = year + "-" + month;
  var referenceDate = new Date(year.value, month.value, 0);
  var valid;
  /**
   * Check if users name is valid.  Input is not empty and is at least 4
   * characters long and is at least 2 words. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(name.value) && (validator.isOfLength(name.value, 4) && validator.moreWordsThan(name.value, 2))) {
    name.setCustomValidity('');
    name.className = 'input valid';
  } else {
    name.setCustomValidity('full name is required and must be at least 2 characters');
    name.className = 'input invalid';
  }

  /**
   * Check if users credit card is valid.  Input is not empty and is a valid
   * card number.
   */
  if (!validator.isEmpty(cardNumber.value) && validator.isCreditCard(cardNumber.value)) {
    // form.className = 'invalid';
    cardNumber.setCustomValidity('');
    cardNumber.className = 'input valid';
  } else {
    // valid = true;
    cardNumber.setCustomValidity('please provide a valid credit card number');
    cardNumber.className = 'input invalid';
  }

  /**
   * Check if user csvCode is valid. Input is not empty and email address is
   * valid.
   */
  if (!validator.isEmpty(csvCode.value) && validator.isNumber(csvCode.value) && ((validator.isOfLength(csvCode.value, 3)) && (validator.isLength(csvCode.value,3)))) {
    csvCode.setCustomValidity('');
    csvCode.className = 'input valid';
  } else {
    csvCode.setCustomValidity('Please provide a valid csv code number');
    csvCode.className = 'input invalid';
  }

  /**
   * Check if user month is valid. Input is not empty.
   */
   if (validator.isNumber(month.value)) {
     month.setCustomValidity('');
     month.className = 'valid';
   } else {
     month.setCustomValidity('Please select a month');
     month.className = 'invalid';
   }

   /**
    * Check if the year is valid. Input is not empty.
    */
    if (validator.isNumber(year.value)) {
      year.setCustomValidity('');
      year.className = 'valid';
    } else {
      year.setCustomValidity('Please select a year');
      year.className = 'invalid';
    }

    /**
     * Check if the date is valid. Input is a valid date and is not and is not expired (is Not After Today);
     */
    if (referenceDate != 'Invalid Date') {
      var dateError = document.getElementById('date-error');
      if (validator.isAfterToday(referenceDate)) {
        month.setCustomValidity('');
        month.className = 'valid';
        year.className = 'valid';
      } else {
        month.setCustomValidity('The date must be in the future');
        month.className = 'invalid';
        year.className = 'invalid';
      }
    }

    /**
     * Checks that validation are valid.  If they are it sets the *
     * form.className to valid.
     */
    if (!validator.isEmpty(name) && validator.isOfLength(name, 2) && validator.moreWordsThan(name, 1) && !validator.isEmpty(cardNumber) && validator.isCreditCard(cardNumber, 2) && !validator.isEmpty(csvCode) && validator.isNumber(csvCode) && (validator.isOfLength(csvCode, 3)) && (validator.isLength(csvCode,4)) && !validator.isEmpty(month) && !validator.isEmpty(year) && validator.isDate(date) && validator.isAfterToday(referenceDate)) {
        form.className = 'valid';
    }
    event.preventDefault();
};

window.onload = function() {
  document.getElementById('name').oninput = checkForm;
  document.getElementById('card-number').oninput = checkForm;
  document.getElementById('csvcode').oninput = checkForm;
  document.getElementById('month').onchange = checkForm;
  document.getElementById('year').onchange = checkForm;
}
