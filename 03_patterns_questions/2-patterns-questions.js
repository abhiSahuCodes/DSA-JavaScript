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

// Solution with TC = O(n) and SC = O(1)
function averagePairNums(arr, target) {
    let left = 0;
    let right = arr.length -1;

    while(left < right) {
        if ((arr[left] + arr[right]) / 2 === target) {
            return true;
        }
        else if ((arr[left] + arr[right]) / 2 > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

console.log(averagePairNums([1, 2, 3, 5, 8, 10, 11], 5));