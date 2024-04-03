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
        console.log(tempSum, maxSum);
    }
    return maxSum;
}


const array = [2, 6, 9, 2, 1, 8, 5, 6, 3];
const num = 3;

console.log(maxSubarraySum(array, num));