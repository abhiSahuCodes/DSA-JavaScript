/*

Input: [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: The pivot index is 3, because the sum of the numbers to the left of index 3 is equal to the sum of numbers to the right of index 3: (1 + 7 + 3) = (5 + 6).

*/

const numArray = [1, 7, 3, 6, 5, 6];

function findingPivotIndex(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
  
  let leftSum = 0;
  for (let j = 0; j < array.length; j++) {
    sum -= array[j];

    if (leftSum === sum) {
        return j;
    }

    leftSum += array[j];
  }
  return -1;
}

console.log(findingPivotIndex(numArray));

// All zeros to the end
/*
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
*/

function moveZerosToTheEnd(array) {
    let nonZeroIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            [array[i], array[nonZeroIndex]] = [array[nonZeroIndex], array[i]];
            nonZeroIndex++;
        }
    }

    for (let i = nonZeroIndex; i < array.length; i++) {
        array[i] = 0;
    }

    return array;
}


const Array = [0, 1, 0, 3, 12];
console.log(moveZerosToTheEnd(Array)); // Output: [1, 3, 12, 0, 0]

