function reverseWords(str) {
  const arrStr = str.split(" ");
  return arrStr.reverse().join(" ");
}
console.log(reverseWords("sjaaf rhisjad daud djavatri"));


function findLetters(str) {
  const arrStr = str.split("");

  const resObject = {};
  for (const i of arrStr) {
    if (!resObject[i]) {
      resObject[i.toLowerCase()] = 1;
    } else {
      resObject[i.toLowerCase()] += 1;
    }
  }

  // cara singkat
  //   return Object.keys(resObject).filter((key) => resObject[key] === 1);

  // cara panjang
  const result = [];

  for (const key in resObject) {
    if (resObject[key] === 1) {
      result.push(key);
    }
  }
  return result;
}
console.log(findLetters("djavatri"));


function minMax(params) {
  const max = Math.max(...params);
  const min = Math.min.apply(Math, params);

  return [min, max]
}
console.log(minMax([1, 2, 3, 4, 5, 8, 10]));


function sortByLength(params) {
  return params.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["sjaaf", "rhisjad", "daud", "djavatri"]));




// QUESTION LOGIC!


// Buatlah fungsi yang menerima inputan kalimat/kata String. kelompokkan hurufnya kemudian hitung berapa jumlah hurufnya!
function countLetters(string) {
  const letterCounts = {};

  for (const element of string) {
    const letter = element
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }

  return letterCounts;
}

const string1 = "Buah";
const string2 = "zoom";
const string3 = "sengaja"

const letterCounts1 = countLetters(string1);
const letterCounts2 = countLetters(string2);
const letterCounts3 = countLetters(string3);

console.log(letterCounts1);
console.log(letterCounts2);
console.log(letterCounts3);



// Berikan array of integer nums dan integer target (hasil dari penjumlahan index yang dituju), dan kembalikan index dari hasil penjumlahan tersebut!
function twoSum(numb, target) {
  const numIndices = new Map();

  for (let i = 0; i < numb.length; i++) {
    const complement = target - numb[i];

    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }

    numIndices.set(numb[i], i);
  }

  return null;
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);



// Buatlah code untuk menampilkan seperti gambar dibawah ini!
function printPattern(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {
        row += "x | ";
      } else {
        row += "o | ";
      }
    }
    console.log(row);
  }
}
printPattern(5, 5);


// robyromadany@k-link.co.id


function plusMinus(arr) {
  const positive = arr.filter((num) => num > 0).length;
  const negative = arr.filter((num) => num < 0).length;
  const zero = arr.filter((num) => num === 0).length;

  const n = arr.length;
  console.log((positive / n).toFixed(6));
  console.log((negative / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}

const arr = [1, 2, 3, 0, -4, -5];
plusMinus(arr);


function miniMaxSum(arr2) {
  const sortedArr = arr2.sort((a, b) => a - b);
  const min = sortedArr.slice(0, 4).reduce((a, b) => a + b);
  const max = sortedArr.slice(1, 5).reduce((a, b) => a + b);
  console.log(min, max);
}
const arr2 = [1, 2, 3, 4, 5];
miniMaxSum(arr2);

function timeConversion(s) {
  const timePart = s.slice(-2); // AM or PM
  const [hours, minutes, seconds] = s.slice(0, 8).split(":");

  let hours12 = parseInt(hours, 10);

  if (timePart === "PM" && hours12 < 12) {
    hours12 += 12;
  } else if (timePart === "AM" && hours12 === 12) {
    hours12 = 0;
  }

  return `${hours12.toString().padStart(2, '0')}:${minutes}:${seconds}`;
}

const s = "07:05:45PM";
console.log(timeConversion(s));

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15);

function lonelyinteger(a){
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
      return a[i];
    }
  }
}
const a = [1, 2, 3, 4, 3, 2, 4];
console.log(lonelyinteger(a));

function diagonalDifference(arr3) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let i = 0; i < arr3.length; i++) {
    leftDiagonal += arr3[i][i];
    rightDiagonal += arr3[i][arr3.length - 1 - i];
  }
  return Math.abs(leftDiagonal - rightDiagonal);
}
const arr3 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]
console.log(diagonalDifference(arr3))

function countingSort(arr4) {
  const max = Math.max(...arr4);
  const result = new Array(max + 1).fill(0);

  for (let i = 0; i < arr4.length; i++) {
    result[arr4[i]]++;
  }

  return result.join(" ");
}

const input = "100\n63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33";
const inputLines = input.split("\n");
const n = parseInt(inputLines[0], 10);
const arr4 = inputLines[1].split(" ").map(Number);
const result2 = countingSort(arr4);
console.log(result2);