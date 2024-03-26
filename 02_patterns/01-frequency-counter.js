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
console.log(same(array1, array2));
