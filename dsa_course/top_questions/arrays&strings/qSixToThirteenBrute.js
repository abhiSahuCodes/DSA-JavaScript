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
