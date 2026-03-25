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
      arr[j] = arr[j - 1]
    }
    arr[0] = lastElement;
  }
  return arr;
}

let arr6 = [1, 2, 5, 9, 10, 15];
let k = 3;

console.log(rotateArray(arr6, k));

// ---------------------------- Rotate an Array by K Steps ------------------------------

