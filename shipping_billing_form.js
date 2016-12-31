var shippingForm = document.getElementById('place-order');

function checkShipping() {
  event.preventDefault();
  var firstnameship = document.getElementById('firstnameship');
  var lastnameship = document.getElementById('lastnameship');
  var address1ship = document.getElementById('address1ship');
  var address2ship = document.getElementById('address2ship');
  var countryship = document.getElementById('countryship');
  var cityship = document.getElementById('cityship');
  var stateship = document.getElementById('stateship');
  var zipcodeship = document.getElementById('zipcodeship');
  var firstnamebill = document.getElementById('firstnamebill');
  var lastnamebill = document.getElementById('lastnamebill');
  var address1bill = document.getElementById('address1bill');
  var address2bill = document.getElementById('address2bill');
  var countrybill = document.getElementById('countrybill');
  var citybill = document.getElementById('citybill');
  var statebill = document.getElementById('statebill');
  var zipcodebill = document.getElementById('zipcodebill');
  var promo = document.getElementById('promo');
  var form = document.getElementById('form');
  var valid;

  /**
   * Check if users firstnamebill and firstnameship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(firstnameship.value) && validator.isOfLength(firstnameship.value, 2)) {
    firstnameship.setCustomValidity('');
    firstnameship.className = "valid input";
  } else {
    firstnameship.setCustomValidity('Please enter a First Name at least 2 charaters');
    firstnameship.className = "invalid input";
  }

  if (!validator.isEmpty(firstnamebill.value) && validator.isOfLength(firstnamebill.value, 2)) {
    firstnamebill.setCustomValidity('');
    firstnamebill.className = "valid input";
  } else {
    firstnamebill.setCustomValidity('Please enter a First Name at least 2 charaters');
    firstnamebill.className = "invalid input";
  }

  /**
   * Check if users lastnamebill and lastnameship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(lastnameship.value) && validator.isOfLength(lastnameship.value, 2)) {
    lastnameship.setCustomValidity('');
    lastnameship.className = "valid input";
  } else {
    lastnameship.setCustomValidity('Please enter a Last Name of at least 2 charaters');
    lastnameship.className = "invalid input";
  }

  if (!validator.isEmpty(lastnamebill.value) && validator.isOfLength(lastnamebill.value, 2)) {
    lastnamebill.setCustomValidity('');
    lastnamebill.className = "valid input";
  } else {
    lastnamebill.setCustomValidity('Please enter a Last Name of at least 2 charaters');
    lastnamebill.className = "invalid input";
  }

  /**
   * Check if users address1bill and address1ship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(address1ship.value) && validator.isOfLength(address1ship.value, 2)) {
    address1ship.setCustomValidity('');
    address1ship.className = "valid input";
  } else {
    address1ship.setCustomValidity('Please enter a valid address');
    address1ship.className = "invalid input";
  }

  if (!validator.isEmpty(address1bill.value) && validator.isOfLength(address1bill.value, 2)) {
    address1bill.setCustomValidity('');
    address1bill.className = "valid input";
  } else {
    address1bill.setCustomValidity('Please enter a valid address');
    address1bill.className = "invalid input";
  }

  /**
   * Check if users countrybill and countryship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(countryship.value) && validator.isOfLength(countryship.value, 2)) {
    countryship.setCustomValidity('');
    countryship.className = "valid input";
  } else {
    countryship.setCustomValidity('Please enter a valid country');
    countryship.className = "invalid input";
  }

  if (!validator.isEmpty(countrybill.value) && validator.isOfLength(countrybill.value, 2)) {
    countrybill.setCustomValidity('');
    countrybill.className = "valid input";
  } else {
    countrybill.setCustomValidity('Please enter a valid country');
    countrybill.className = "invalid input";
  }

  /**
   * Check if users citybill and cityship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(cityship.value) && validator.isOfLength(cityship.value, 2)) {
    cityship.setCustomValidity('');
    cityship.className = "valid input";
  } else {
    cityship.setCustomValidity('Please enter a valid city');
    cityship.className = "invalid input";
  }

  if (!validator.isEmpty(citybill.value) && validator.isOfLength(citybill.value, 2)) {
    citybill.setCustomValidity('');
    citybill.className = "valid input";
  } else {
    citybill.setCustomValidity('Please enter a valid city');
    citybill.className = "invalid input";
  }
  /*
  *
   * Check if users statebill and stateship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(stateship.value) && validator.isOfLength(stateship.value, 2)) {
    stateship.setCustomValidity('');
    stateship.className = "valid input";
  } else {
    stateship.setCustomValidity('Please enter a valid state');
    stateship.className = "invalid input";
  }

  if (!validator.isEmpty(statebill.value) && validator.isOfLength(statebill.value, 2)) {
    statebill.setCustomValidity('');
    statebill.className = "valid input";
  } else {
    statebill.setCustomValidity('Please enter a valid state');
    statebill.className = "invalid input";
  }

  /**
   * Check if users zipcodebill and zipcodeship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(zipcodeship.value) && validator.isOfLength(zipcodeship.value, 5) && validator.isNumber(zipcodeship.value)) {
    zipcodeship.setCustomValidity('');
    zipcodeship.className = "valid input";
  } else {
    zipcodeship.setCustomValidity('Please enter a valid 5 digit zipcode');
    zipcodeship.className = "invalid input";
  }

  if (!validator.isEmpty(zipcodebill.value) && validator.isOfLength(zipcodebill.value, 5) && validator.isNumber(zipcodebill.value)) {
    zipcodebill.setCustomValidity('');
    zipcodebill.className = "valid input";
  } else {
    zipcodebill.setCustomValidity('Please enter a valid valid 5 digit zipcode');
    zipcodebill.className = "invalid input";
  }

  /**
   * Check if users lastnamebill and lastnameship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(lastnameship) && !validator.isEmpty(lastnamebill) && validator.isOfLength(lastnameship, 2) && validator.isOfLength(lastnamebill, 2) && !validator.isEmpty(address1ship) && !validator.isEmpty(address1bill) && validator.isOfLength(address1ship, 2) && validator.isOfLength(address1bill, 2) && !validator.isEmpty(countryship) && !validator.isEmpty(countrybill) && validator.isOfLength(countryship, 2) && validator.isOfLength(countrybill, 2) && !validator.isEmpty(cityship) && !validator.isEmpty(citybill) && validator.isOfLength(cityship, 2) && validator.isOfLength(citybill, 2) && !validator.isEmpty(stateship) && !validator.isEmpty(statebill) && validator.isOfLength(stateship, 2) && validator.isOfLength(statebill, 2) && !validator.isEmpty(zipcodeship) && !validator.isEmpty(zipcodebill) && validator.isOfLength(zipcodeship, 5) && validator.isOfLength(zipcodebill, 5) && validator.isNumber(zipcodeship) && validator.isNumber(zipcodebill)) {
      form.className = 'valid';
  }
}

/**
 * Check for a valid promotion code
 */
function checkPromo(event) {
  event.preventDefault();
  var promoForm = document.getElementById('applyform');
  /**
   * Check if users promo is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(promo.value) &&  validator.isOfLength(promo.value, 5) && validator.isAlphanumeric(promo.value)) {
    promo.setCustomValidity('');
    promo.className = "valid input";
    promoForm.className = 'valid';
  } else {
    promo.setCustomValidity('Please enter a valid promotion code');
    promo.className = "invalid input";
  }
}

window.onload = function() {
  document.getElementById('firstnameship').oninput = checkShipping;
  document.getElementById('firstnamebill').oninput = checkShipping;
  document.getElementById('lastnameship').oninput = checkShipping;
  document.getElementById('lastnamebill').oninput = checkShipping;
  document.getElementById('address1bill').oninput = checkShipping;
  document.getElementById('address1ship').oninput = checkShipping;
  document.getElementById('countrybill').oninput = checkShipping;
  document.getElementById('countryship').oninput = checkShipping;
  document.getElementById('cityship').oninput = checkShipping;
  document.getElementById('citybill').oninput = checkShipping;
  document.getElementById('stateship').oninput = checkShipping;
  document.getElementById('statebill').oninput = checkShipping;
  document.getElementById('zipcodeship').oninput = checkShipping;
  document.getElementById('zipcodebill').oninput = checkShipping;
  document.getElementById('promo').oninput = checkPromo;
}
