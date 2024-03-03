let arr = [20, 30, 40, 80, 70, 100];

// 40 to delete
let position = 2;

for (let i = position; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);

// It will give 
// [ 20, 30, 80, 70, 100 ]

/*
first loop
arr[2] = arr[3] // arr[2] that is 40 will become 80. [20, 30, 80, 80, 70, 100]

*/
/*
second loop
arr[3] = arr[4] // arr[3] that is 80 will become 70. [20, 30, 80, 70, 70, 100]

*/
/*
third loop
arr[4] = arr[5] // arr[4] that is 70 will become 100. [20, 30, 80, 70, 100, 100]

*/
/*
first loop
arr[5] = arr[6] // arr[5] that is 100 will become undefined as there is nothing. [20, 30, 80, 70, 100, undefined]

*/
/*
Then arr.length = arr.length - 1; // This will lower the length to 5 elements.
Hence, arr = [20, 30, 80, 70, 100]

*/