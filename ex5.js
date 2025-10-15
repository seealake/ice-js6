/**
 * Detects whether an array is a palindrome.
 * @param {Array} arr - The array to check.
 * @returns {boolean}
 */
function isPalindrome(arr) {
  // your code here
  // use .reverse()!
  const reversed = [...arr].reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reversed[i]) {
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
