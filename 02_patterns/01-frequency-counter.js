/*
Write a function called 'same', which accepts two arrays. The function
should return true if every value in the array has it's corresponding
value squared in the second array. The frequency of values must be the
same.
*/

// This is O(n2) as it is looping over one array and other in nested.
function same(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        //Finding the index of the square of the number in array2
        let corrIndex = array2.indexOf(array1[i] ** 2);
        //If not present
        if (corrIndex === -1) {
            return false;
        }
        //If present then removing it from array2
        array2.splice(corrIndex, 1);
    }
    //When all are removed after the loop is over
    return true;
}

const array1 = [1, 2, 3, 2];
const array2 = [9, 1, 4, 4];
// console.log(same(array1, array2));

// Refactored 

function sameRefact(arr1, arr2) {
    if (arr1.length !== arr2.length) return;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

const arr1 = [1, 5, 3, 3];
const arr2 = [9, 1, 25, 9];
console.log(sameRefact(arr1, arr2));






