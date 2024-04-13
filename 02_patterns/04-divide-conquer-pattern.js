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

let val = 103;

console.log(searchValue(arr, val));

// Time Complexity: O(log n)

function searchEfficient(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middleIndex = Math.floor((max + min) / 2);
        let currentElement = array[middleIndex];

        if (currentElement < val) {
            min = middleIndex + 1;
        }

        else if (currentElement > val) {
            max = middleIndex -1;
        }

        else {
            return middleIndex;
        }
    }
    return -1;
}

console.log(searchEfficient(arr, val));