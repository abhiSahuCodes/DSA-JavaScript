let arrOne = [2, 3, 5, 6];
let arrTwo = [8, 4, 7];
let arrThree = [];

for (let i = 0; i < arrOne.length; i++) {
  arrThree[i] = arrOne[i];
}

for (let i = arrOne.length; i < arrOne.length + arrTwo.length; i++) {
  arrThree[i] = arrTwo[i - arrOne.length];
}
console.log(arrThree);

/*
 arrOne.length = 4, arrTwo.length = 3, arrOne.length + arrTwo.length = 7
 corresponding index i will be 3, 2, 6 respectively, and the second
 for loop will start from i = 4 till 6, hence will fill index 4, 5, 6
 arrThree.
 In second loop arrTwo[(4 - 4)] = arrTwo[0]
*/

// Another way (easy one)
let dataOne = [2, 3, 5, 6];
let dataTwo = [8, 4, 7];
let dataThree = [];

for (let i = 0; i < dataOne.length; i++) {
    dataThree[i] = dataOne[i];
}

for (let i = 0; i < dataTwo.length; i++) {
    dataThree[dataOne.length + i] = dataTwo[i];
}

console.log(dataThree);