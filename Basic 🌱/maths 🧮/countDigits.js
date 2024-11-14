// you have digit and you find the count of digits

function countNumber(Number) {
  console.log("number is:- ", Number);

  // Method 1: Logarithmic Calculation
  // Time Complexity:- O(1),
  // (i) It doesn’t rely on conversions to strings. but Suitable for large numbers.
  // (ii) Does not work correctly for Number = 0 (returns -Infinity).
  return Math.floor(Math.log10(Number)) + 1;

  // Method 2: String Conversion
  //   Time Complexity: O(d), where d is the number of digits in the number.
  // it is better because it’s concise and straightforward.
  // (i) Simple and very readable., (ii) Handles all edge cases (negative numbers, zero).
  //*   return Number.toString().length;
  //! learning:- Why Convert to String?
  // JavaScript numbers do not have a built-in length property, so we can't directly get the digit count. By converting the number to a string, we can use .length to get the number of characters in the string representation of the number.

  // Method 3: Iteration, Loop-Based Division
  //   let count = 0;
  //   while (Number > 0) {
  //     // Math.floor() is used to handle edge cases where the number is exactly a power of 10.
  //     Number = Math.floor(Number / 10);
  //     count++;
  //   }
  //   return count;
}

function extractDigits(Number) {
  let ans = [];
  while (Number > 0) {
    let Digits = Number % 10;
    ans.push(Digits);
    Number = Math.floor(Number / 10);
  }
  ans.reverse();
  return ans;
}

function main() {
  let Number = 23456;

  let count = countNumber(Number);
  let digits = extractDigits(Number);

  console.log("count is:- ", count);
  console.log("digits is:- ", digits);
}

main();
