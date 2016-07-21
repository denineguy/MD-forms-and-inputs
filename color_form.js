var colorForm = document.getElementById('apply');
colorForm.addEventListener('click', function (event) {
  event.preventDefault();
  var red = document.getElementById('r').value;
  var green = document.getElementById('g').value;
  var blue = document.getElementById('b').value;
  var hue = document.getElementById('h').value;
  var sat = document.getElementById('s').value;
  var light = document.getElementById('l').value;
  var hex = document.getElementById('hex').value;
  var form = document.getElementById('form');
  var valid;
  var rgb;
  var hsl;
  var hexadem;
  var isRGB;
  var isHSL;
  var isHex;

  /**
   * Construct the values for RGB, HSL and hexadem
   *
   */
  if (red && green && blue) {
    rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  }

  if (hue && sat && light) {
    hsl = 'hsl(' + hue + ', ' + sat + ', ' + light + ')';
  }

  if (hex) {
    hexadem = '#' + hex;
  }

  /**
   * Check if there is a RGB, HSL or hexadem value.
   */
  if (rgb || hsl || hex) {
    valid = false;
  } else {
    form.className = 'invalid';
  }
  /**
   * Check if the input is a valid RGB input.
   */
  if (rgb) {
    if (validator.isRGB(rgb)) {
      isRGB = true;
    } else {
      form.className = 'invalid';
    }
  }

  /**
   * Check if the input is a valid HSL input.
   */
  if (hsl) {
    if (validator.isHSL(hsl)) {
      isHSL = true;
    } else {
      form.className = 'invalid';
    }
  }

  /**
   * Check if the input is a valid Hexadecimal input.
   */
  if (hex) {
    if (validator.isHex(hexadem)) {
      isHex = true;
    } else {
      form.className = 'invalid';
    }
  }

  /**
   * Check if there is a valid RGB, HSL or Hexadecimal input.
   */
  if (isRGB || isHSL || isHex) {
    form.className = 'valid';
    return form.className;
  } else {
    form.className = 'invalid';
    return form.className;
  }

  //For this validation I did not use the isColor validation because of how I am
  //collecting my inputs
});
