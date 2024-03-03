let arr = [25, 66, 32, 43, 35, 12, 5, 7, 9, 10];

let position = 6;

let number = 24;

for (let i = arr.length -1; i >= position; i--) {
    arr[i + 1] = arr[i];
    if (i == position) {
        arr[i] = number;
    }
}

console.log(arr);