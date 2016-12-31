var scheduleForm = document.getElementById('schedule');
function checkSchedule(event) {

  event.preventDefault();
  var date = document.getElementById('date');
  var time = document.getElementById('time');
  var timezone = document.getElementById('timezone');
  var phoneNumber = document.getElementById('phone-number');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  var form = document.getElementById('form');
  var futureDate = new Date();
  var referenceDate = futureDate.setDate(futureDate.getDate() + 1);
  var valid;
  var dateTime = getDateTime(date.value, time.value, timezone.value);
  var isAfterDate;

  function getDateTime(date, time, timezone) {
    if (validator.isEmpty(date) || validator.isEmpty(time) ||
    validator.isEmpty(timezone) || timezone === 'timezone') {
      date.className = 'invalid';
      time.className = 'invalid';
      timezone.className = 'invalid';
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
  if (validator.isDate(date.value)) {
    date.setCustomValidity('');
    date.className = 'valid input'
  } else {
    date.setCustomValidity('Please enter a valid date');
    date.className = 'invalid input';
  }

  /**
   * Check if users time and timezone is valid.  Input is not empty and the
   * datetime is after the current datetime
   */

  if (dateTime) {
    if (validator.isAfterDate(dateTime, referenceDate)) {
      date.setCustomValidity('');
      date.className = 'valid input';
      time.className = 'valid input';
      timezone.className = '';

    } else {
      date.setCustomValidity('Please select a date and time in the future');
      date.className = 'invalid input';
      time.className = 'invalid input';
      timezone.className = 'invalid';
    }
  }

  /**
   * Check if user email is valid. Input is not empty and email address is
   * valid.
   */
  if (!validator.isEmpty(phoneNumber.value) && validator.isPhoneNumber(phoneNumber.value)) {
    phoneNumber.className = 'valid input';
    phoneNumber.setCustomValidity('');
  } else {
    phoneNumber.className = 'invalid input';
    phoneNumber.setCustomValidity('Please enter a valid 10 digit phone number ');
  }

  /**
   * Check if user email is valid. Input is not empty and email address is
   * valid.
   */
  if (!validator.isEmpty(email.value) && validator.isEmailAddress(email.value)) {
    email.className = 'valid input';
    email.setCustomValidity('');
  } else {
    email.className = 'invalid input';
    email.setCustomValidity('Please enter a valid email address ');
  }

  /**
   * Check if user message is valid. Input is not empty and contains at least 2
   * chararters.
   */
  if (validator.isEmpty(message.value) && validator.isOfLength(message.value, 2)) {
    message.className = 'valid input message';
    message.setCustomValidity('');
  } else {
    message.className = 'invalid input message';
    message.setCustomValidity('Please enter a valid email address ');
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
}

window.onload = function() {
  document.getElementById('date').onchange = checkSchedule;
  document.getElementById('time').oninput = checkSchedule;
  document.getElementById('timezone').onchange = checkSchedule;
  document.getElementById('phone-number').oninput = checkSchedule;
  document.getElementById('email').oninput = checkSchedule;
}
