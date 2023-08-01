/**
 * Reverses a string and upper-cases all the letters.
 *
 * @param {string} input - The input string.
 * @returns {string} The reversed and upper-cased string.
 */

export const reverseAndUpper = (input) => {
    let reversed = input.split('').reverse().join('');
  
    reversed = reversed.toUpperCase();
  
    return reversed;
  };
  