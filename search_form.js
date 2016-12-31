var searchForm = document.getElementById('search');
// searchForm.addEventListener('click', function(event) {
function checkSearchForm() {
  event.preventDefault();
  var criterias = document.getElementById('criteria');
  var form = document.getElementById('form');
  var valid;
  /**
   * Check if users criteria is valid.  Input is not empty, input is at least 3
   * characters long but less than 50 characters long. Input is also alphanumeric.  This field will not take symbols.
   */
  if (!validator.isEmpty(criteria.value) && ((validator.isOfLength(criteria.value, 3)) && validator.isLength(criteria.value, 50))) {
    criteria.setCustomValidity('');
  } else {
    criteria.setCustomValidity('Please enter a valid search at between 3-50 characters');
  }

  /**
   * Checks that validation are valid.  If they are it sets the *
   * form.className to valid.
   */
  if (!validator.isEmpty(criteria.value) && validator.isAlphanumeric(criteria.value) && (validator.isOfLength(criteria.value, 2)) && (validator.isLength(criteria.value, 50))) {
    form.className = 'valid';
  } else {
    form.className = 'invalid';
  }
}

window.onload = function() {
  document.getElementById('criteria').oninput = checkSearchForm;
}
