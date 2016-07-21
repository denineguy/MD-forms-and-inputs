var shippingForm = document.getElementById('place-order');
shippingForm.addEventListener('click', function(event) {
  event.preventDefault();
  var firstnameship = document.getElementById('firstnameship').value;
  var lastnameship = document.getElementById('lastnameship').value;
  var address1ship = document.getElementById('address1ship').value;
  var address2ship = document.getElementById('address2ship').value;
  var countryship = document.getElementById('countryship').value;
  var cityship = document.getElementById('cityship').value;
  var stateship = document.getElementById('stateship').value;
  var zipcodeship = document.getElementById('zipcodeship').value;
  var firstnamebill = document.getElementById('firstnamebill').value;
  var lastnamebill = document.getElementById('lastnamebill').value;
  var address1bill = document.getElementById('address1bill').value;
  var address2bill = document.getElementById('address2bill').value;
  var countrybill = document.getElementById('countrybill').value;
  var citybill = document.getElementById('citybill').value;
  var statebill = document.getElementById('statebill').value;
  var zipcodebill = document.getElementById('zipcodebill').value;
  var promo = document.getElementById('promo').value;
  var form = document.getElementById('form');
  var valid;

  /**
   * Assume that the form is valid if I don't want to do the final check at
   * the end
   */
  //form.className = 'valid';

  /**
   * Check if users firstnamebill and firstnameship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(firstnameship) && validator.isEmpty(firstnamebill)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(firstnameship, 2) && validator.isOfLength(firstnamebill, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users lastnamebill and lastnameship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(lastnameship) && validator.isEmpty(lastnamebill)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(lastnameship, 2) && validator.isOfLength(lastnamebill, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users address1bill and address1ship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(address1ship) && validator.isEmpty(address1bill)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(address1ship, 2) && validator.isOfLength(address1bill, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users countrybill and countryship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(countryship) && validator.isEmpty(countrybill)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(countryship, 2) && validator.isOfLength(countrybill, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users citybill and cityship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(cityship) && validator.isEmpty(citybill)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(cityship, 2) && validator.isOfLength(citybill, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }
  /*
  *
   * Check if users statebill and stateship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(stateship) && validator.isEmpty(statebill)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(stateship, 2) && validator.isOfLength(statebill, 2)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users zipcodebill and zipcodeship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(zipcodeship) && validator.isEmpty(zipcodebill)) {
    form.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(zipcodeship, 5) && validator.isOfLength(zipcodebill, 5)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  if (validator.isNumber(zipcodeship) && validator.isNumber(zipcodebill)) {
    valid = true;
  } else {
    form.className = 'invalid';
  }

  /**
   * Check if users lastnamebill and lastnameship is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (!validator.isEmpty(lastnameship) && !validator.isEmpty(lastnamebill) && validator.isOfLength(lastnameship, 2) && validator.isOfLength(lastnamebill, 2) && !validator.isEmpty(address1ship) && !validator.isEmpty(address1bill) && validator.isOfLength(address1ship, 2) && validator.isOfLength(address1bill, 2) && !validator.isEmpty(countryship) && !validator.isEmpty(countrybill) && validator.isOfLength(countryship, 2) && validator.isOfLength(countrybill, 2) && !validator.isEmpty(cityship) && !validator.isEmpty(citybill) && validator.isOfLength(cityship, 2) && validator.isOfLength(citybill, 2) && !validator.isEmpty(stateship) && !validator.isEmpty(statebill) && validator.isOfLength(stateship, 2) && validator.isOfLength(statebill, 2) && !validator.isEmpty(zipcodeship) && !validator.isEmpty(zipcodebill) && validator.isOfLength(zipcodeship, 5) && validator.isOfLength(zipcodebill, 5) && validator.isNumber(zipcodeship) && validator.isNumber(zipcodebill)) {
      form.className = 'valid';
  }

  //Another way to do this is to set form.className = 'valid' at the top. and it will only flip when form.className = invalid. Then the above check to ensure every validation is valid is not needed.  The only reason I am not doing that is because I do not want to set the default value to "valid"
});

var applyForm = document.getElementById('applyform');
var promoForm = document.getElementById('apply');
promoForm.addEventListener('click', function(event) {
  event.preventDefault();
  var promo = document.getElementById('promo').value;

  /**
   * Check if users promo is valid.  Input is not empty and is at least 2
   * characters long. Not checking if the name is alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
  if (validator.isEmpty(promo)) {
    applyForm.className = 'invalid';
  } else {
    valid = true;
  }

  if (validator.isOfLength(promo, 2)) {
    valid = true;
  } else {
    applyForm.className = 'invalid';
  }

  if (validator.isAlphanumeric(promo)) {
    valid = true;
  } else {
    applyForm.className = 'invalid';
  }

  if (!validator.isEmpty(promo) &&  validator.isOfLength(promo, 5) && validator.isAlphanumeric(promo)) {
      applyForm.className = 'valid';
  }

});
