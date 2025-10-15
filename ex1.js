/**
 * Detects whether a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean}
 */
function isPalindrome(str) {
  // your code here!
  // use a C-style for loop
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function test(str) {
  console.log(isPalindrome(str));
}

test("racecar");
// you may want to add more test cases
