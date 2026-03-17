// ----------------------------Two Sum------------------------------
/* 
Question: Given an array of numbers and a target value, 
          find the indices of two numbers that add up to the target.
Example:          
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]   → because nums[0] + nums[1] = 2 + 7 = 9

Steps:

    1. Start a loop i from index 0 to the end of the array.
    2. Start a second (inner) loop j from i + 1 to the end.
    3. For each pair (i, j), check if nums[i] + nums[j] === target.
    4. If yes, return [i, j].

*/

let arr = [2, 7, 11, 5];
let target = 12;

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum(arr, target));