// Frequency Counter - same frequency

// 1. Findout if two numbers have the same frequency of digits.
// Time complexity should be O(n).

function sameFrequency(n1, n2) {
  let frC1 = {};
  let frC2 = {};

  let arr1 = n1.toString().split("");
  let arr2 = n2.toString().split("");

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    frC1[arr1[i]] = (frC1[arr1[i]] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    frC2[arr2[i]] = (frC2[arr2[i]] || 0) + 1;
  }

  for (let val in frC1) {
    if (!(val in frC2)) {
      return false;
    }
    if (frC1[val] !== frC2[val]) {
      return false;
    }
  }
  return true;
}

const n1 = 235;
const n2 = 352;
const n3 = 456;
const n4 = 457;
const n5 = 333;
const n6 = 3333;

console.log(sameFrequency(n1, n2));
console.log(sameFrequency(n3, n4));
console.log(sameFrequency(n5, n6));
