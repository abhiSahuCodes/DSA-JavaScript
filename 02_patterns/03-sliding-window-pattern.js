// Max of four digits in an array

// non-optimal solution
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let tempSum = 0;
    for (let j = 0; j < num; j++) {
      tempSum += arr[i + j];
    }
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

const array = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const num = 3;

console.log(maxSubarraySum(array, num));

// optimal solution sliding window method

function subarrayMaxSum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(subarrayMaxSum(array, num));

// Sliding subarray beauty
function beautySubarray(nums, k, x) {
    let result = [];
    for (let i = 0; i <= nums.length - k; i++) {
      // Extracting subarray of size k
      let subarray = nums.slice(i, i + k);
      // Filtering negative numbers and sort them
      let negatives = subarray.filter(num => num < 0).sort((a, b) => a - b);
      // Extracting the beauty
      let beauty = negatives.length >= x ? negatives[x - 1] : 0;
      // Adding beauty to the result
      result.push(beauty);
    }
    return result;
}

let nums = [1, -1, -3, -2, 3];
let k = 3;
let x = 2;

// console.log(beautySubarray(nums, k, x));


