var validator = (function(window) {
  var validator = {
    /**
     * Checks if the `input` parameter is an email address, consisting of three
     * parts: An email address consists of two strings combined by an `@`
     * symbol.
     */
    isEmailAddress: function(input) {
      var hasSymbol = input.indexOf('@');
      if (input.indexOf('@') === -1) {
        return false;
      } else {
        var emailArray = input.split('@');
      }
      if (emailArray.length === 2 && emailArray[0].length > 0 && emailArray[1].length > 0) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Checks if the `input` parameter is a valid phone number for your country.
     */
    isPhoneNumber: function(input) {
      //assuming country is USA and is written in this format XXX-XXX-XXXX
      // var count = input.match(/-/g).length;
      var count = 0
      var a;
      var firstDigits;
      var midDigits;
      var lastDigits;
  	  for(var i=0; i<input.length; i++) {
  	    if(input[i]=== "-") {
  			  count++;
  	    }
  	  }
  	  if(count !== 2) {
  	  	return false;

  	  }

  	  a = input.split('-');
      firstDigits = a[0].length;
      midDigits = a[1].length;
      lastDigits = a[2].length;
      if (firstDigits === 3 && midDigits === 3 && lastDigits === 4) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Returns the `input` parameter text with all symbols removed. Symbols
     * refer to any non-*alphanumeric* character. A character is considered
     * alphanumeric if it matches one of the following: `a—z`, `A—Z`, or `0—9`. * Ignore whitespace.
     */
    withoutSymbols: function(input) {
      var alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split("");
    	var newString = [];
    	var array = input.split("").filter(function(item) {
    		return alphaNum.indexOf(item.toLowerCase()) > -1;
    	});
    	return array.join("");
      //with regex
      //var newString = input.replace(/[^a-zA-Z0-9\s]\g/, "");
      //return newString;
    },

    /**
     * Checks if the `input` parameter text is a valid date. For your purposes,
     * a valid date is any string that can be turned into a *JavaScript Date
     * Object*.
     */
    isDate: function(input) {
      if (new Date(input) == 'Invalid Date') {
        return false
      } else {
        return true;
      }
    },

    /**
     * Checks if the `input` parameter is a date that comes **after** the
     * `reference ` date. Both the `input` and the `reference` can be strings or * Date Objects. This function relies on two valid dates; if two are not
     * found, it should * throw a new error.
     */
    isBeforeDate: function(input, reference) {
      if (new Date(input) == "Invalid Date" || new Date(reference) == "Invalid Date") {
        throw new Error("Invalid Date");
        return false;
      } else if (new Date(input) < new Date(reference)) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Checks if the `input` parameter is a date that comes **before** the
     * `reference` date. Both the `input` and the `reference` can be strings or * Date Objects. This function relies on two valid dates; if two are not
     * found, it should throw a new error.
     */
    isAfterDate: function(input, reference) {
      if (new Date(input) == "Invalid Date" || new Date(reference) == "Invalid Date") {
        throw new Error("Invalid Date");
        return false;
      } else if (new Date(input) > new Date(reference)) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Checks if the `input` parameter is a date that comes **before today**.
     * The * `input` can be either a string or a Date Object. This function
     * relies on one valid date; if one is not found, it should throw a new
     * error.
     */
    isBeforeToday: function(input) {
      if(new Date(input) == "Invalid Date") {
        throw new Error("Invalid Date");
        return false;
      } else if ( new Date(input) < new Date()) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Checks if the `input` parameter is a date that comes **after today**. The * `input` can be either a string or a Date Object. This function relies on
     * one valid date; if one is not found, it should throw a new error.
     */
    isAfterToday: function(input) {
      if(new Date(input) == "Invalid Date") {
        throw new Error("Invalid Date")
      } else if ( new Date(input) >
       new Date()) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Checks the `input` parameter and returns true if it is an *empty*
     * string–a string with no length or characters that is represented as `""`
     * or only contains whitespace(s).
     */
    isEmpty: function(input) {
      if (typeof input !== "string") {
        return false;
      } else if (input.trim().length === 0) {
        return true;
      } else {
        return false;
      }
    },

    /**
     * Checks if the `input` text parameter contains one or more of the
     * **words** within the `words` array. A word is defined as the following:
     * having `undefined`, whitespace, or punctuation before and after it. The
     * function should be case-insensitive.
     */
    contains: function(input, words) {
      var punct = '\.,-/#!$%^&*;:{}=-_/"`~()'.split('');
      var result = false;
      var stringArray;
      var newWord = [];
      var char;
      //for the purposes of this exercise I will assume that hyphenated words are not words and hyphens should be removed.  Otherwise this line can be removed from the function.
  	  for(var i=0; i<input.length; i++) {
  	    if(input[i]=== "-") {
  	    	char = input[i].replace(input[i], " ");
  	    	newWord.push(char);
  	    } else {
  	    	newWord.push(input[i]);
  	    }
  	  }
  	  sen = newWord.join('');

      stringArray = sen.toLowerCase().split(" ").map(function(item) {
        return item.split("").filter(function(char) {
          return punct.indexOf(char) === -1;
        }).join('');
      });

      for (var i=0; i<stringArray.length; i++) {
      	for (var j=0; j<words.length; j++) {
      		if (stringArray[i] == words[j].toLowerCase()) {
      			result = true;
      		}
      	}
      }
      return result;
    },

    /**
     * Checks if the `input` text parameter **does not contain any of the
     * words** within the `words` array. Use the “word” definition used in the
     * above `.contains` description. The function should be case-insensitive. A
     * function like this could be used for checking blacklisted words.
     */
    lacks: function(input, words) {
      var punct = '\.,-/#!$%^&*;:{}=-_/"`~()'.split('');
      var result = false;
      var stringArray;
      var newWord = [];
      var char;
      //for the purposes of this exercise I will assume that hyphenated words are not words and hyphens should be removed.  Otherwise this line can be removed from the function.
  	  for(var i=0; i<input.length; i++) {
  	    if(input[i]=== "-") {
  	    	char = input[i].replace(input[i], " ");
  	    	newWord.push(char);
  	    } else {
  	    	newWord.push(input[i]);
  	    }
  	  }
	    sen = newWord.join('');
      stringArray = sen.toLowerCase().split(" ").map(function(item) {
        return item.split("").filter(function(char) {
          return punct.indexOf(char) === -1;
        }).join('');
      });

      for (var i=0; i<stringArray.length; i++) {
      	for (var j=0; j<words.length; j++) {
      		if (stringArray[i] == words[j].toLowerCase()) {
      			result = false;
      		}
      	}
      }
      return result;
    },

    /**
     * Checks that the `input` text parameter contains only **strings** found
     * within the `strings` array. Note that this function doesn’t use a strong * word definition the way `.contains` and `.lacks` does. The function
     * should be case-insensitive.
     */
    isComposedOf: function(input, strings) {
      for(var i=0; i<strings; i++) {
        var result = input.includes(words[i]);
      }

      return result;
    },

    /**
     * Checks if the input parameter’s character count is less than or equal to * the n parameter.
     */
    isLength: function(input, n) {
      return input.length <= n;
    },

    /**
     * Checks if the `input` parameter’s character count is **greater than or
     * equal** to the `n` parameter.
     */
    isOfLength: function(input, n) {
      return input.length >= n;
    },

    /**
     * Counts the number of words in the `input` parameter. Refer to the
     * definition of word used in the description of the `.contains` function
     * above.
     */
    countWords: function(input) {
      var punct = '\.,-/#!$%^&*;:{}=-_/"`~()'.split('');
      var result = false;
      var stringArray;
      var newWord = [];
      var char;
      //for the purposes of this exercise I will assume that hyphenated words are not words and hyphens should be removed.  Otherwise this line can be removed from the function.
  	  for(var i=0; i<input.length; i++) {
  	    if(input[i]=== "-") {
	    	char = input[i].replace(input[i], " ");
	    		newWord.push(char);
	    	} else {
	    	newWord.push(input[i]);
  	    }
  	  }
  	  input = newWord.join('');
      stringArray = input.toLowerCase().split(" ").map(function(item) {
        return item.split("").filter(function(char) {
            return punct.indexOf(char) === -1;
        }).join('');
      });

      var wordsArray = stringArray.filter(function(word) {
        return word.length > 0;
      })
      return wordsArray.length;
    },

    /**
     * Checks if the `input` parameter has a word count **less than or equal
     * to** the `n` parameter.
     */
    lessWordsThan: function(input, n) {
      var punct = '\.,-/#!$%^&*;:{}=-_/"`~()'.split('');
      var result = false;
      var stringArray;
      var newWord = [];
      var char;
      //for the purposes of this exercise I will assume that hyphenated words are not words and hyphens should be removed.  Otherwise this line can be removed from the function.
      for(var i=0; i<input.length; i++) {
        if(input[i]=== "-") {
      	char = input[i].replace(input[i], " ");
      		newWord.push(char);
      	} else {
      	newWord.push(input[i]);
        }
      }
      input = newWord.join('');
      stringArray = input.toLowerCase().split(" ").map(function(item) {
         return item.split("").filter(function(char) {
             return punct.indexOf(char) === -1;
         }).join('');
      });

      var wordsArray = stringArray.filter(function(word) {
         return word.length > 0;
      });
      return wordsArray.length <= n;
    },

    /**
     * Checks if the `input` parameter has a word count **greater than or equal
     * to** the `n` parameter.
     */
     moreWordsThan: function(input, n) {
       var punct = '\.,-/#!$%^&*;:{}=-_/"`~()'.split('');
       var result = false;
       var stringArray;
       var newWord = [];
       var char;
       //for the purposes of this exercise I will assume that hyphenated words are not words and hyphens should be removed.  Otherwise this line can be removed from the function.
       for(var i=0; i<input.length; i++) {
         if(input[i]=== "-") {
         char = input[i].replace(input[i], " ");
           newWord.push(char);
         } else {
         newWord.push(input[i]);
         }
       }
       input = newWord.join('');
       stringArray = input.toLowerCase().split(" ").map(function(item) {
         return item.split("").filter(function(char) {
           return punct.indexOf(char) === -1;
         }).join('');
       });

       var wordsArray = stringArray.filter(function(word) {
         return word.length > 0;
       })
       return wordsArray.length >= n;
     },

    /**
     * Checks that the `input` parameter matches all of the following:
     * `input` is **greater than or equal to** the `floor` parameter
     * `input` is **less than or equal to** the `ceil` parameter.
     */
    isBetween: function(input, floor, ceil) {
      var punct = '\.,-/#!$%^&*;:{}=-_/"`~()'.split('');
      var result = false;
      var stringArray;
      var newWord = [];
      var char;
      //for the purposes of this exercise I will assume that hyphenated words are not words and hyphens should be removed.  Otherwise this line can be removed from the function.
      for(var i=0; i<input.length; i++) {
        if(input[i]=== "-") {
        char = input[i].replace(input[i], " ");
          newWord.push(char);
        } else {
        newWord.push(input[i]);
        }
      }
      input = newWord.join('');
      stringArray = input.toLowerCase().split(" ").map(function(item) {
          return item.split("").filter(function(char) {
              return punct.indexOf(char) === -1;
          }).join('');
      });
      var wordsArray = stringArray.filter(function(word) {
        return word.length > 0;
      })

      return wordsArray.length >= floor && wordsArray.length <= ceil;
    },

    /**
     * Checks that the `input` parameter string is **only composed of the following characters**: `a—z`, `A—Z`, or `0—9`. Unicode characters are intentionally disregarded.
     */
     isAlphanumeric: function(input) {
       var alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
       var punctArray = input.toLowerCase().split("").filter(function(item) {
  	      return alphaNum.indexOf(item) === -1
        })
        return punctArray.length <= 0
     },

     /**
      * Checks that the `input` parameter string is **only composed of the following characters**: `a—z`, `A—Z`, or `0—9`. Unicode characters are intentionally disregarded.
      */
      isNumber: function(input) {
        var alphaNum = '0123456789'.split('');
        var charArray = input.split("").filter(function(item) {
   	      return alphaNum.indexOf(item) === -1
         })
         return charArray.length <= 0
      },

    /**
     * Checks if the `input` parameter is a credit card or bank card number. A * credit card number will be defined as four sets of four alphanumeric
     * characters separated by hyphens (`-`), or a single string of
     * alphanumeric characters (without hyphens).
     */

     //for the purposes of this exercise the alpha will be capitalized.
     isCreditCard: function (input) {
      var alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
      var numString = input;
      var result;
      var numArray;
      var punctArray;
     	if(input[4] === '-' && input[9] === '-' && input[14] === '-') {
     		numArray = input.split("").map(function(item) {
     			if(item === '-'){
     				return item.replace(item, "");
     			} else{
     				return item;
     			}
     		})
     		numString = numArray.join('');
      }

      if(numString.length === 16) {
     		punctArray = numString.toLowerCase().split("").filter(function(item) {
         		return alphaNum.indexOf(item) === -1;
     		})
        return punctArray.length <= 0
     	} else {
     		return false;
     	}
    },

    /**
     * Checks if the input string is a hexadecimal color, such as `#3677bb`.
     * Hexadecimal colors are strings with a length of 7 (including the `#`),
     * using the characters `0—9` and `A—F`. `isHex` should also work on
     * shorthand hexadecimal colors, such as `#333.` The `input` must start
     * with a `#` to be considered valid.
     */
    isHex: function(input) {
    	var alphaNum =  'abcdefABCDEF0123456789'.split('');
    	if(input[0] === '#' && (input.length === 7 || input.length === 4)) {
    		for (var i=1; i<input.length; i++) {

    			var result = alphaNum.includes(input[i]);
    		}
    		return result;
    	} else {
    		return false;
    	}
    },

    /**
     * Checks if the input string is an RGB color, such as `rgb(200, 26,
     * 131)`. An RGB color consists of:
     * Three numbers between 0 and 255
     * A comma between each number
     * The three numbers should be contained within “`rgb(``” and “`)`“.
     */
    isRGB: function(input) {
      var begin = input.slice(0,4);
      var end = input.slice(-1);
      var mid = input.slice(4, input.length-1);
    	var count = 0;
    	var pos = mid.indexOf(',');
    	var numArray;
    	var validNum0;
    	var validNum1;
    	var validNum2;

    	while (pos !== -1) {
      	   count++;
      	   pos = mid.indexOf(',', pos + 1);
    	}

    	if (begin === 'rgb(' && end === ')' && count === 2) {
    		numArray = mid.split(',');
    		validNum0 = numArray[0] !== '' && numArray[0] >= 0 && numArray[0] <= 255;
    		validNum1 =  numArray[0] !== '' && numArray[1] >= 0 && numArray[1] <= 255;
    		validNum2 =  numArray[0] !== '' && numArray[2] >= 0 && numArray[2] <= 255;
    		if (validNum0 && validNum1 && validNum2 && numArray.length === 3) {
    			return true;
    		}
    		else {
    			return false;
    		}
    	} else {
    		return false;
    	}
    },

    /**
     * Checks if the input string is an HSL color, such as `hsl(122, 1, 1)`.
     * An HSL color consists of:3
     * Three numbers:
     * the first number, *Hue*, is between 0 and 360
     * the second and third numbers, *Saturation and Lightness*, are between 0 * and 1
     * A comma between each number
     * The three numbers should be contained within “`hsl`(” and “`)`“.
     */
    isHSL: function(input) {
      var begin = input.slice(0,4);
      var end = input.slice(-1);
      var mid = input.slice(4, input.length-1);
      var count = 0;
      var pos = mid.indexOf(',');
      var numArray;
      var validNum0;
      var validNum1;
      var validNum2;

      while (pos !== -1) {
      	   count++;
      	   pos = mid.indexOf(',', pos + 1);
      }

      if (begin === 'hsl(' && end === ')' && count === 2) {
      	numArray = mid.split(',');
      	validNum0 = numArray[0] >= 0 && numArray[0] <= 360;
      	validNum1 = numArray[1] >= 0 && numArray[1] <= 1;
      	validNum2 = numArray[2] >= 0 && numArray[2] <= 1;
      	if (validNum0 && validNum1 && validNum2 && numArray.length === 3) {
      		return true;
      	}
      	else {
      		return false;
      	}
      } else {
      	return false;
      }
    },

    /**
     * Checks if the `input` parameter is a hex, RGB, or HSL color type.
     */
    isColor: function(input) {
      if(this.isHex(input) || this.isRGB(input) || this.isHSL(input)) {
      return true;
      } else {
        return false;
      }
    },

   /**
    * Checks if the `input `parameter has leading or trailing whitespaces or
    * too many spaces between words. Leading refers to before while trailing * refers to after. This function will help validate cases where extra
    * spaces were added accidentally by the user.
    */
    isTrimmed: function(input) {
      return input.indexOf('  ') === -1;
    }
  }
  return validator;
})(window);
