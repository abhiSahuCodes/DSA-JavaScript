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


