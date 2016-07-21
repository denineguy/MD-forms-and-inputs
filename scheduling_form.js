var scheduleForm = document.getElementById('schedule');
scheduleForm.addEventListener('click', function (event) {
  event.preventDefault();
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var timezone = document.getElementById('timezone').value;
  var phoneNumber = document.getElementById('phone-number').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var form = document.getElementById('form');
  var futureDate = new Date();
  var referenceDate = futureDate.setDate(futureDate.getDate() + 1);
  var valid;
  var dateTime = getDateTime(date, time, timezone);
  var isAfterDate;

  function getDateTime(date, time, timezone) {
    if (validator.isEmpty(date) || validator.isEmpty(time) ||
    validator.isEmpty(timezone) || timezone === 'timezone') {
      form.className = 'invalid';
    } else {
      var datetime = date + 'T' + time;
      var d = new Date(datetime);
      var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      var nd = utc + (3600000 * timezone);
      return nd;
    }
  }

  /**
   * Check if users date is valid.  Input is not empty, it is a valid date and
   * the date is not in the past.
   */
  if (validator.isDate(date)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users time and timezone is valid.  Input is not empty and the
   * datetime is after the current datetime
   */

  if (dateTime) {
    if (validator.isAfterDate(dateTime, referenceDate)) {
      isAfterDate = true;
    } else {
      form.className = 'invalid';
    }
  }

  /**
   * Check if user email is valid. Input is not empty and email address is
   * valid.
   */
  if (validator.isEmpty(phoneNumber)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isPhoneNumber(phoneNumber)) {
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
   * Check if user message is valid. Input is not empty and contains at least 2
   * chararters.
   */
  if (validator.isEmpty(message)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(message, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Checks that validation are valid.  If they are it sets the *
   * form.className to valid.
   */
  if (dateTime && isAfterDate && validator.isDate(date) &&
    !validator.isEmpty(phoneNumber) && validator.isPhoneNumber(phoneNumber) &&
    !validator.isEmpty(email) && validator.isEmailAddress(email) &&
    !validator.isEmpty(message) && validator.isOfLength(message, 2)) {
    form.className = 'valid';
  }

});
