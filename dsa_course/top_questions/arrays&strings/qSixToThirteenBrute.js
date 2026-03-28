// ---------------------------- Rotate an Array by K Steps ------------------------------

/* 
Question: Given an array, rotate (shift) it to the right by K steps. 
Every element moves K positions to the right, and elements at the end wrap around to the front.

Example:
Input:  [1, 2, 3, 4, 5],  k = 2
Output: [4, 5, 1, 2, 3]
         ↑ last 2 elements come to the front

Steps:
Repeat a single rotation K times.
In each rotation: remove the last element from the array.
Place that removed element at the beginning (index 0).
After all K rotations, return the array.

⏱ Time Complexity: O(n × k) — inner shift runs n times, outer loop runs k times.
🗂 Space Complexity: O(1) — rotation is done in-place.

*/

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;

  for (let i = 0; i < k; i++) {
    let lastElement = arr[n - 1];
    for (let j = n - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = lastElement;
  }
  return arr;
}

let arr6 = [1, 2, 5, 9, 10, 15];
let k = 3;

console.log(rotateArray(arr6, k));

// ---------------------------- Move All Zeroes to the End ------------------------------

/* 
Question: Given an array, move all 0s to the end of the array while keeping the order of 
non-zero elements unchanged.

Example:
Input:  [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Steps:
Create two separate arrays: one for non-zero elements, one for zeros.
Loop through the input array.
If the current element is not 0, push it to the non-zero array.
If the current element is 0, push it to the zeros array.
Merge (concatenate) both arrays: non-zeros first, then zeros.

⏱ Time Complexity: O(n) — one loop through the array.
🗂 Space Complexity: O(n) — two extra arrays are created.
*/

function moveZeros(arr) {
  let arrZeros = [];
  let arrNonZeros = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num === 0) {
      arrZeros.push(num);
    } else {
      arrNonZeros.push(num);
    }
  }
  let movedZerosArray = arrNonZeros.concat(arrZeros);
  return movedZerosArray;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

// ---------------------------- Merge Two Sorted Arrays ------------------------------

/* 
Question: Given two sorted arrays, merge them into one single sorted array.

Example:
Input:  arr1 = [1, 3, 5],  arr2 = [2, 4, 6]
Output: [1, 2, 3, 4, 5, 6]
[1, 3, 5, 2, 4, 6]

Steps:
Combine both arrays into one big array using spread or concat.
Sort the combined array using a comparator function.
Return the sorted result.

⏱ Time Complexity: O((n + m)²) — bubble sort on the merged array of size n+m.
🗂 Space Complexity: O(n + m) — a new merged array is created.
*/

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);

  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[i] > mergedArray[j]) {
        let last = mergedArray[i];
        mergedArray[i] = mergedArray[j];
        mergedArray[j] = last;
      }
    }
  }
  console.log(mergedArray);
}

mergeSortedArrays([1, 3, 5], [2, 4, 6]);

//  ---------------------------- Find the Missing Number (1 to n) ------------------------------

/* 
Question: Given an array containing n - 1 numbers from 1 to n, find the one missing number.

Example:
Input:  [1, 2, 4, 5, 6],  n = 6
Output: 3   → 3 is missing

Steps:
Loop from 1 to n (inclusive).
For each number i, check if it exists in the array using another inner loop.
If a number is not found in the array, that is the missing number.
Return it.

⏱ Time Complexity: O(n²) — for every number 1 to n, we scan the entire array.
🗂 Space Complexity: O(1) — no extra space used.
*/

function findMissingNumber(arr, n) {
  for (let i = 1; i <= n; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) return i;
  }
  return -1;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6));

//  ---------------------------- Longest Substring Without Repeating Characters ------------------------------

/* 
Question: Given a string, find the length of the longest part (substring) that 
has no repeated characters.

Example:
Input:  "abcabcbb"
Output: 3   → "abc" is the longest without repeats

Input:  "pwwkew"
Output: 3   → "wke"

Steps:
Use two loops: outer loop picks the start of the substring.
Inner loop extends the substring from that start.
Use a Set to track characters seen so far.
If a character is already in the Set, stop the inner loop.
Track and update the maximum length found.
If using object:
Use two loops: outer loop picks the start of the substring.
Inner loop extends the substring character by character from that start.
Use an object to track characters seen so far.
If a character is already in the object, stop the inner loop.
Track and update the maximum length using j - i + 1 
where i is the start and j is the current position.

⏱ Time Complexity: O(n²) — two nested loops over the string.
🗂 Space Complexity: O(min(n, 26)) — the object holds at most the unique characters.
*/

function lengthOfLongestSubstring(string) {
  let maxLength = 0;
  for (let i = 0; i < string.length; i++) {
    let seen = {};
    for (let j = i; j < string.length; j++) {
      if (seen[string[j]]) {
        break;
      } else seen[string[j]] = true;
      console.log(seen);
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  console.log(maxLength);
}

lengthOfLongestSubstring("pwwkwe");

//  ---------------------------- Valid Anagram ------------------------------

/* 
Question: Two strings are anagrams if one string can be formed by 
rearranging the letters of the other. Check if two given strings are anagrams.

Example:
Input:  s = "anagram",  t = "nagaram"  →  Output: true
Input:  s = "rat",      t = "car"      →  Output: false

Steps:
If both strings have different lengths, immediately return false.
Loop through the first string and count the frequency of each 
character using an object (frequency map).
Loop through the second string and decrease the count for each character.
If a character is not found or count goes below 0, return false.
If all counts remain balanced, return true.

⏱ Time Complexity: O(n) — two separate loops of length n.
🗂 Space Complexity: O(1) — at most 26 letters stored in the frequency map.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCounter = {};

  for (let char of str1) {
    if (freqCounter[char]) {
      freqCounter[char] += 1;
    } else {
      freqCounter[char] = 1;
    }
  }

  for (let char of str2) {
    if (!freqCounter[char]) {
      return false;
    } else {
      freqCounter[char] -= 1;
    }
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

//  ---------------------------- Group Anagrams Together ------------------------------

/* 
Question: Given an array of strings, group the strings that are anagrams of each other together.

Example:
Input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

⏱ Time Complexity: O(n² * k log k) — where n is the number of words 
and k is the maximum length of a word; the nested loops compare each 
word against existing groups, sorting the strings repeatedly inside the inner loop.
🗂 Space Complexity: O(n * k) — the groups array stores every character of 
every word from the input, and additional strings are created during the sorting process.
*/

function groupAnagram(words) {
  let groups = [];

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    let sortedCurrent = currentWord.split("").sort().join("");

    let placed = false;

    for (let j = 0; j < groups.length; j++) {
      let groupRepresentative = groups[j][0];
      let representativeSorted = groupRepresentative.split("").sort().join("");

      if (sortedCurrent === representativeSorted) {
        groups[j].push(currentWord);
        placed = true;
        break;
      }
    }
    if (!placed) {
      groups.push([currentWord]);
    }
  }
  console.log(groups);
}

groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);

//  ---------------------------- Product of Array Except Self ------------------------------

/* 
Question: Given an array, return a new array where each element at index i is the 
product of all numbers in the original array except the number at index i. You cannot use division.

Example:
Input:  [1, 2, 3, 4]
Output: [24, 12, 8, 6]

  Index 0 → 2 × 3 × 4 = 24
  Index 1 → 1 × 3 × 4 = 12
  Index 2 → 1 × 2 × 4 = 8
  Index 3 → 1 × 2 × 3 = 6

Steps:
Create a result array of the same size filled with 1s.
Use two nested loops: the outer loop picks index i.
The inner loop multiplies all elements except arr[i].
Store that product in result[i].
Return the result array.

⏱ Time Complexity: O(n²) — two nested loops, each running n times.
🗂 Space Complexity: O(n) — the result array of size n.
*/

function productExceptSelf(arr) {
  let result = new Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result[i] = product;
  }
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
