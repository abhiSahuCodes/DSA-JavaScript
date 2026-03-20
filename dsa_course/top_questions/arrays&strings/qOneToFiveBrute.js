// ----------------------------Two Sum------------------------------
/* 
Question: Given an array of numbers and a target value, 
          find the indices of two numbers that add up to the target.
Example:          
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]   → because nums[0] + nums[1] = 2 + 7 = 9

Steps:

    1. Start a loop i from index 0 to the end of the array.
    2. Start a second (inner) loop j from i + 1 to the end.
    3. For each pair (i, j), check if nums[i] + nums[j] === target.
    4. If yes, return [i, j].

*/

let arr = [2, 7, 11, 5];
let target = 12;

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(arr, target));

// ---------------------------- Reverse a String ------------------------------

/* 
Question: Given a string or array, return it in reversed order.

Example:
Input:  "hello"         →  Output: "olleh"
Input:  [1, 2, 3, 4, 5] →  Output: [5, 4, 3, 2, 1]

Steps:
Create an empty result (empty string or empty array).
Loop from the last index down to 0.
At each step, add the current element to the result.
Return the result.
*/

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log(reversedString);
}

function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  console.log(reversedArray);
}

let str = "fantastic";
let arr1 = [2, 3, 5, 9, 10];

reverseString(str);
reverseArray(arr1);

/* 
⏱ Time Complexity: O(n) — one loop through all elements.
🗂 Space Complexity: O(n) — we store the reversed result separately.
*/

// ---------------------------- Check Palindrome ------------------------------

/* 
Question: A string is a palindrome if it reads the same forwards and backwards. Check if a given string is a palindrome.

Example:
Input: "racecar"  →  Output: true   (racecar reversed = racecar)
Input: "hello"    →  Output: false  (hello reversed = olleh)

Steps:
Reverse the original string using a loop (same as Problem 2).
Compare the reversed string with the original.
If they are equal, it is a palindrome → return true.
Otherwise return false.

⏱ Time Complexity: O(n) — one loop to reverse.
🗂 Space Complexity: O(n) — extra string stored for the reversed version.
*/

function checkPalindrome(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  console.log(str === reversedStr);
}

checkPalindrome('racecar');
checkPalindrome('racing');


