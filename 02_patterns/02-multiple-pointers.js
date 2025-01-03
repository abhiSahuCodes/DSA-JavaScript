// sum zero

// simple method but high time complexity - O(n2)
function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

const nums = [-4, -3, -2, -1, 0, 1, 2, 5];
// console.log(sumZero(nums));

// linear time complexity

function sumZeroRefactored(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum == 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const array = [-4, -3, -2, -1, 0, 1, 2, 5];
// console.log(sumZeroRefactored(array));

// count unique values
function countingUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
let arrVal = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
console.log(countingUniqueValues(arrVal));

// new variable method
function uniqueValuesCounter(array) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique.length;
}

console.log(uniqueValuesCounter(arrVal));

// sorted target array

function sortedArrayTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
          return mid;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  
  return -1; 
}

const arr = [-4, -1, 0, 3, 5, 9, 12];
const target = 5;
console.log(sortedArrayTarget(arr, target)); 


// & ---------------- Question 1 ---------------- 

// Find the first pair of numbers with a specific difference

/*
Write a function that takes a sorted array of integers and a target difference. 
The function should return the first pair of numbers in the array whose difference equals the target difference. If no such pair exists, return undefined.


findPairWithDifference([1, 3, 5, 9, 12], 4); // [1, 5]
findPairWithDifference([2, 3, 6, 10, 15], 7); // [3, 10]
findPairWithDifference([1, 2, 3, 4], 6); // undefined

*/

// ~ Brute force solution

function findPairWithDifference(array, targetDiff) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (Math.abs(array[j] - array[i]) === targetDiff) { // No Math.abs to ensure the difference is directional
        return [array[i], array[j]];
      }
    }
  }
  return undefined;
}

// Test cases
console.log(findPairWithDifference([1, 3, 5, 9, 12], 4)); // [1, 5]
console.log(findPairWithDifference([2, 4, 8, 10, 15], 7)); // [8, 15]
console.log(findPairWithDifference([1, 2, 3, 4], 6)); // undefined


/*
^ Explanation:

The function uses two nested loops:
The outer loop iterates through the elements of the array (i index).
The inner loop compares the element at i with the rest of the elements (j index).
It calculates the absolute difference between array[i] and array[j] using Math.abs.
If the difference equals targetDiff, the function returns the pair [array[i], array[j]].
If no pair is found, the function returns undefined.

*/

// ~ Optimal solution

function findPairWithDifference(array, targetDiff) {
  let left = 0;
  let right = 1;

  while (right < array.length) {
    let difference = array[right] - array[left];

    if (difference === targetDiff) {
      return [array[left], array[right]];
    } else if (difference < targetDiff) {
      right++; // Increase the right pointer to get a larger difference
    } else {
      left++; // Increase the left pointer to get a smaller difference
    }

    // Ensure pointers don't overlap
    if (left === right) {
      right++;
    }
  }

  return undefined; // No pair found
}

// Test cases
console.log(findPairWithDifference([1, 3, 5, 9, 12], 4)); // [1, 5]
console.log(findPairWithDifference([2, 8, 6, 10, 15], 7)); // [8, 15]
console.log(findPairWithDifference([1, 2, 3, 4], 6)); // undefined

/*
^ Explanation:

1. Pointers Setup:
      Start with two pointers, left and right.
      left points to the first element, and right points to the next one.

2. Logic:
      Calculate the difference: difference = array[right] - array[left].
      If the difference matches the targetDiff, return the pair [array[left], array[right]].
      If the difference is smaller than the target, move right to increase the difference.
      If the difference is larger than the target, move left to decrease the difference.

Pointer Adjustment:
      Ensure left never overtakes right.
      Increment right if left === right after adjustments.
      Time Complexity: O(n), as both pointers traverse the array at most once.

*/

