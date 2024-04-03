// Max of four digits in an array

// non-optimal solution
function maxSubarraySum(arr, sum) {
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

// console.log(maxSubarraySum(array, num));

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
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(subarrayMaxSum(array, num));