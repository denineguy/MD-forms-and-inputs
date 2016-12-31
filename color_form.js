var colorForm = document.getElementById('apply');
colorForm.addEventListener('click', function (event) {
  var error = document.getElementById('error');
  var rgbError = document.getElementById('rgb-error');
  var hslError = document.getElementById('hsl-error');
  var hexError = document.getElementById('hex-error');
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
    error.innerHTML = '';
    error.removeAttribute('class', 'error');
  } else {
    error.className = 'error';
    error.innerHTML = 'You must provide a valid RGB, HSL or HEX value';
  }

  /**
   * Check if the input is a valid RGB input.
   */
  if (rgb) {
    if (validator.isRGB(rgb)) {
      isRGB = true;
      rgbError.innerHTML = '';
      rgbError.removeAttribute('class', 'rgb-error');
    } else {
      rgbError.className = 'rgb-error';
      rgbError.innerHTML = 'You must provide a valid RGB value';
    }
  }

  /**
   * Check if the input is a valid HSL input.
   */
  if (hsl) {
    if (validator.isHSL(hsl)) {
      isHSL = true;
      hslError.innerHTML = '';
      hslError.removeAttribute('class', 'hsl-error');
    } else {
      hslError.className = 'hsl-error';
      hslError.innerHTML = 'You must provide a valid HSL value';
    }
  }

  /**
  * Check if the input is a valid Hexadecimal input.
  */
  if (hex) {
    if (validator.isHex(hexadem)) {
      isHex = true;
      hexError.innerHTML = '';
      hexError.removeAttribute('class', 'hex-error');
    } else {
      hexError.className = 'hex-error';
      hexError.innerHTML = 'You must provide a valid Hex value';
    }
  }

  /**
   * Check if there is a valid RGB, HSL or Hexadecimal input.
   */
  if (isRGB || isHSL || isHex) {
    form.className = 'valid';
  } else {
    form.className = 'invalid';
  }
  event.preventDefault();
});
