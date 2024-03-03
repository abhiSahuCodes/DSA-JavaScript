let arrOne = [2, 3, 5, 6];
let arrTwo = [8, 4, 7];
let arrThree = [];

let i = 0;

while(i < arrOne.length) {
    arrThree[arrThree.length] = arrOne[i];
    i++;
}

i = 0;

while(i < arrTwo.length) {
    arrThree[arrThree.length] = arrTwo[i];
    i++;
}

console.log(arrThree);

// let dataOne = [2, 3, 11, 6];
// let dataTwo = [8, 4, 7];
// let dataThree = [];

// let d1 = 0;
// let d2 = 0;
// let d3 = 0;

// while(d1 < dataOne.length && d2 < dataTwo.length) {
//     if (dataOne[d1] < dataTwo[d2]) {
//         dataThree[d3] = dataOne[d1];
//         d1++;
//     } else {
//         dataThree[d3] = dataTwo[d2];
//         d2++;
//     }
//     d3++;
// }
// while(d1 < dataOne.length) {
//     dataThree[d3] = dataOne[d1];
//     d1++;
//     d3++;
// }
// while(d2 < dataTwo.length) {
//     dataThree[d3] = dataTwo[d2];
//     d2++;
//     d3++;
// }
// console.log(dataThree);




