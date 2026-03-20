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

checkPalindrome("racecar");
checkPalindrome("racing");

// ---------------------------- Remove Duplicates from a Sorted Array ------------------------------

/* 
Question: Given a sorted array, remove the duplicate numbers and return only the unique elements (in-place, from the front).

Example:
Input:  [1, 1, 2, 3, 3, 4]
Output: [1, 2, 3, 4]  → 4 unique elements

Steps:
Create an empty result array.
Loop through the sorted array.
For each element, check if it is already the last element added to the result.
If it is NOT a duplicate, push it to the result.
Return the result.

⏱ Time Complexity: O(n) — single loop through the array.
🗂 Space Complexity: O(n) — a new array is created to store unique elements.
*/

function removeDuplicates(arr) {
  let sortedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[sortedArr.length - 1] !== arr[i]) {
      sortedArr.push(arr[i]);
    }
  }
  console.log(sortedArr);
}

let arr2 = [1, 1, 2, 3, 3, 4, 5, 5];
let arr3 = [9, 9, 9, 9];
removeDuplicates(arr2);
removeDuplicates(arr3);

// ---------------------------- Find the Maximum / Minimum in an Array ------------------------------

/* 
Question: Given an array of numbers, find the largest (maximum) and smallest (minimum) number

Example:
Input:  [3, 1, 9, 2, 7]
Output: Max = 9,  Min = 1

Steps:
Assume the first element is both the max and the min.
Loop through the rest of the array.
If the current element is greater than max, update max.
If the current element is less than min, update min.
Return both values.

⏱ Time Complexity: O(n) — one pass through the array.
🗂 Space Complexity: O(1) — only two variables used.
*/

function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

let arr4 = [3, 1, 9, 2, 7];
let arr5 = [5, 5, 5, 5, 5];
console.log(findMaxMin(arr4));
console.log(findMaxMin(arr5));
