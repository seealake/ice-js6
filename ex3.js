/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} the reversed string.
 */
function createReversedString(str) {
  // your code here!
}

function isPalindrome(str) {
  return str === createReversedString(str);
}

function test(str) {
  console.log(isPalindrome(str));
}

test("racecar");
// you may want to add more test cases
