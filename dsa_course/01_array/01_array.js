// -----------------1. ARRAY ITERATION---------------------
// a. for loop (most control)
const arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

/*
Lets you control index manually
Useful for two pointers, sliding window, prefix sums
*/

// b. for...of(cleanest of values)
for (const num of arr) {
  //   console.log(num);
}

// c. forEach(callback based)
arr.forEach((num) => {
  //   console.log(num);
});

// d. While loops(used in two pointers)
let i = 0;
while (i < arr.length) {
  //   console.log(arr[i]);
  i++;
}

// Interview-style example 👉 Find the max in an array

const arr1 = [2, 7, 1, 10, 4];

let max = arr[0];

for (let num of arr1) {
  if (num > max) {
    max = num;
  }
}
console.log(max);

// -------------------------2. PREFIX SUMS (BEGINNER-FRIENDLY)-------------------

/*
Prefix sum means:

Create a new array where each position holds the sum from start → that index.
*/

/* Example:
Array: [1, 2, 3, 4]
Prefix sum: [1, 3, 6, 10] */

/* Why important?
- Reduces repeated sums
- Turns many O(n²) problems into O(n)
- Used in subarray sum, range sum queries

It helps us:
- Calculate range sums in O(1) time
- Optimize problems from O(n²) → O(n)

Used in:
- Subarray problems
- Range queries
- Sliding window
- Many interview questions
*/

// arr = [1, 2, 3, 4];
// prefix = [1, 3, 6, 10];

/*
Original array: 
Index:   0   1   2   3
arr:     1   2   3   4
*/

/* 
Building prefix:
prefix[0] = 1
prefix[1] = 1 + 2 = 3
prefix[2] = 3 + 3 = 6
prefix[3] = 6 + 4 = 10
*/

/* 
prefix: [1, 3, 6, 10]
*/

const arr2 = [1, 2, 3, 4];
const prefix = Array(arr2.length).fill(0);

prefix[0] = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  prefix[i] = prefix[i - 1] + arr2[i];
}

// console.log(prefix);
