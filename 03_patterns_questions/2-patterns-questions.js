// Average Pair

// Solution with TC = O(n2) and SC = O(1)
function averagePair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) / 2 === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3, 5, 8, 10, 11], 9));

