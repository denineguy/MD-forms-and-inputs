var searchForm = document.getElementById('search');
searchForm.addEventListener('click', function(event) {
  event.preventDefault();
  var criterias = document.getElementById('criteria').value;
  var form = document.getElementById('form');
  var valid;
  /**
   * Assume that the form is valid if I don't want to do the final check at
   * the end
   */
  //form.className = 'valid';

  /**
   * Check if users criteria is valid.  Input is not empty, input is at least 2
   * characters long but less than 50 characters long. Input is also alphanumeric.  This field will not take symbols.
   */
  if (validator.isEmpty(criteria)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if ((validator.isOfLength(criteria, 2)) && validator.isLength(criteria, 50)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  //[TODO]I may decided to take this check out because search fields do take alphanumberic characters.
  if (validator.isAlphanumeric(criteria)) {
    valid = true;
  } else {
    form.className = 'invalid'
  }

  /**
   * Checks that validation are valid.  If they are it sets the *
   * form.className to valid.
   */
  if (!validator.isEmpty(criteria) && validator.isAlphanumeric(criteria) && (validator.isOfLength(criteria, 2)) && (validator.isLength(criteria, 50))) {
    form.className = 'valid';
  }
  //[TODO] [ADD CHECK FOR MININMUM AGE]

  //Another way to do this is to set form.className = 'valid' at the top. and it will only flip when form.className = invalid. Then the above check to ensure every validation is valid is not needed.  The only reason I am not doing that is because I do not want to set the default value to "valid"
});
