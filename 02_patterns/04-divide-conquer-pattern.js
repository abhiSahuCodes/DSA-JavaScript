// Finding an element in a sorted array

function searchValue(array, val) {
    if (array.length === 0 || array[0] > val || array[array.length - 1] < val) {
        return -1;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === val) {
                return i;
            } 
        }
        return -1;
    }
}

const arr = [3, 4, 6, 8, 11, 14, 17, 18, 30, 45, 66, 71, 75, 92, 103, 106, 234, 235, 345, 543, 565];

let val = 234;

console.log(searchValue(arr, val));