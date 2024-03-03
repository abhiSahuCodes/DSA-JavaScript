// Find the first two elements of an array whose sum is zero.
// Using brute force.

let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function zeroSum(array) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(zeroSum(arr));

// Using linear approach.

let newArray = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function twoSumZero(array) {
  let left = 0;
  let right = newArray.length - 1;

  while (left < right) {
    if (newArray[left] + newArray[right] == 0) {
      return [newArray[left], newArray[right]];
    } else if (newArray[left] + newArray[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(twoSumZero(newArray));