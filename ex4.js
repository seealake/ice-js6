/**
 * Detects whether an array is a palindrome.
 * @param {Array} arr - The array to check.
 * @returns {boolean}
 */
function isPalindrome(arr) {
  // your code here
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function test(arr) {
  console.log(isPalindrome(arr));
}

test(["r", "a", "c", "e", "c", "a", "r"]);
test([1, 2, 3]);
test([true, "a string", false, "a string", true]);
