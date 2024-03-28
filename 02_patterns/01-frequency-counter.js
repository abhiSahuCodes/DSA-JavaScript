/*
Write a function called 'same', which accepts two arrays. The function
should return true if every value in the array has it's corresponding
value squared in the second array. The frequency of values must be the
same.
*/

// This is O(n2) as it is looping over one array and other in nested.
function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    //Finding the index of the square of the number in array2
    let corrIndex = array2.indexOf(array1[i] ** 2);
    //If not present
    if (corrIndex === -1) {
      return false;
    }
    //If present then removing it from array2
    array2.splice(corrIndex, 1);
  }
  //When all are removed after the loop is over
  return true;
}

const array1 = [1, 2, 3, 2];
const array2 = [9, 1, 4, 4];
// console.log(same(array1, array2));

// Refactored

function sameRefact(arr1, arr2) {
  if (arr1.length !== arr2.length) return;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 5, 3, 3];
const arr2 = [9, 1, 25, 9];
// console.log(sameRefact(arr1, arr2));

// Anagram
/*
Given two strings, write a function to determine if the second
string is an anagram of the first. An anagram is a word, phrase,
or name formed by rearranging the letters of another, such as 'cinema',
formed from 'iceman'.
*/

function anagramAnalyzer(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let i = 0; i < str1.length; i++) {
        freqCounter1[str1[i]] = (freqCounter1[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        freqCounter2[str2[i]] = (freqCounter2[str2[i]] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (!(key in freqCounter2)) {
            return false;
        }
        if (freqCounter1[key] !== freqCounter2[key]) {
            return false;
        }
    }
    return true;
}

const string1 = 'texttwisttime';
const string2 = 'timetwisttext';

// console.log(anagramAnalyzer(string1, string2));

// Another method

function isValidAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    let counter = {};

    for (let i = 0; i < first.length; i++) {
        let character = first[i];

        counter[character] ? counter[character] += 1 : counter[character] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let character = second[i];

        if (!counter[character]) {
            return false;
        } else {
            counter[character] -= 1;
        }
    }
    return true;
}

const firstString = 'anagram';
const secondString = 'nagaram';

// console.log(isValidAnagram(firstString, secondString));

