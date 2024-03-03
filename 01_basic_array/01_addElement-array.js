let arr = [25, 66, 32, 43, 35, 12, 5, 7, 9, 10];

let position = 6;

let number = 24;

for (let i = arr.length - 1; i >= position; i--) {
  arr[i + 1] = arr[i];
  if (i == position) {
    arr[i] = number;
  }
}

console.log(arr);

// first loop
/*
i = 9;
arr[10] = arr[9];  [5, 7, 9, 10, 10]

*/
// second loop
/*
i = 8;
arr[9] = arr[8];  [5, 7, 9, 9, 10]

*/
// third loop
/*
i = 7;
arr[8] = arr[7];  [5, 7, 7, 9, 10]

*/
// fourth loop
/*
i = 6;
arr[7] = arr[6];  [5, 5, 7, 9, 10]
arr[6] = 24

// Hence, arr = [25, 66, 32, 43, 35, 12, 24, 5, 7, 9, 10]
*/
