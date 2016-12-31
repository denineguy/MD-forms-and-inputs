var questionForm = document.getElementById('submit');
questionForm.addEventListener('click', function (event) {
  event.preventDefault();
  var fruitRadio = document.getElementById('fruit-radio');
  var fruitOther = document.getElementById('fruit-other').value;
  var iceCreamOther = document.getElementById('icecream-other').value;
  var iceCreamRadio = document.getElementById('icecream-radio');
  var superheroRadio = document.getElementById('superhero-radio');
  var superheroOther = document.getElementById('superhero-other').value;
  var sodaOther = document.getElementById('soda-other').value;
  var sodaRadio = document.getElementById('soda-radio');
  var form = document.getElementById('form');
  var fruit = document.getElementById('fruit');
  var iceCream = document.getElementById('ice-cream');
  var superHero = document.getElementById('super-hero');
  var soda = document.getElementById('soda');
  var valid;
  var fruitValid;
  var iceCreamValid;
  var superheroValid;
  var sodaValid;

  /**
   * Check if users other field for fruit question is valid.  Input is not empty
   * and is at least 2 characters long. Not checking if the name is alphaNumeric
   * as some people * have hyphenated or apostrophe's in names.
   */
   if (fruitRadio.checked) {
     if (!validator.isEmpty(fruitOther) && validator.isOfLength(fruitOther, 2)) {
       fruitValid = true;
       fruit.innerHTML = '';
       fruit.removeAttribute('class', 'fruit-error');
       fruit.className = 'error';
     } else {
       fruit.removeAttribute('class', 'error');
       fruit.className = 'fruit-error';
       fruit.innerHTML = 'Select or enter a fruit';
     }
   } else {
     fruit.className = 'error';
   }

  /**
   * Check if users other field for the ice cream question is valid.  Input is
   * not empty and is at least 2 characters long. Not checking if the name is
   * alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
   if (iceCreamRadio.checked) {
     if (!validator.isEmpty(iceCreamOther) && validator.isOfLength(iceCreamOther,
     2)) {
       iceCreamValid = true;
       iceCream.innerHTML = '';
       iceCream.removeAttribute('class', 'ice-cream-error');
       iceCream.className = 'error';
     } else {
       iceCream.removeAttribute('class', 'error');
       iceCream.className = 'ice-cream-error';
       iceCream.innerHTML = 'Select or enter an ice cream';
       form.className = 'invalid';
     }
   } else {
     iceCream.className = 'error';
   }

  /**
   * Check if users other field for the ice cream question is valid.  Input is
   * not empty and is at least 2 characters long. Not checking if the name is
   * alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
   if (superheroRadio.checked) {
     if (!validator.isEmpty(superheroOther) && validator.isOfLength(
       superheroOther, 2)) {
       superheroValid = true;
       superHero.innerHTML = '';
       superHero.className = 'error';
      //  superHero.removeAttribute('class', 'super-hero-error');
     } else {
       form.className = 'invalid';
       superHero.removeAttribute('class', 'error');
       superHero.className = 'super-hero-error';
       superHero.innerHTML = 'Select or enter a super hero';
     }
   } else {
     superHero.className = 'error';
   }

  /**
   * Check if users other field for the ice cream question is valid.  Input is
   * not empty and is at least 2 characters long. Not checking if the name is
   * alphaNumeric as some people * have hyphenated or apostrophe's in names.
   */
   if(sodaRadio.checked) {
     if (!validator.isEmpty(sodaOther) && validator.isOfLength(sodaOther, 2)) {
       sodaValid = true;
       soda.innerHTML = '';
       soda.className('class', 'error');
     } else {
       form.className = 'invalid';
       soda.removeAttribute('class', 'error');
       soda.className = 'soda-error';
       soda.innerHTML = 'Select or enter a soda';
     }
   } else {
     soda.className = 'error';
   }

  /**
   * Checks that validation are valid.  If they are it sets the form.className
   * to valid.
   */
  if (!sodaRadio.checked  && !superheroRadio.checked && !fruitRadio.checked &&
    !iceCreamRadio.checked) {
    form.className = 'valid';
  }

  if (fruitValid && iceCreamValid && superheroValid && sodaValid) {
    form.className = 'valid';
  }
});
