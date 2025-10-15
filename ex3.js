/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} the reversed string.
 */
function createReversedString(str) {
  // your code here!
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/**
 * Detects whether a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean}
 */
function isPalindrome(str) {
  return str === createReversedString(str);
}

function test(str) {
  console.log(isPalindrome(str));
}

test("racecar");
// you may want to add more test cases
