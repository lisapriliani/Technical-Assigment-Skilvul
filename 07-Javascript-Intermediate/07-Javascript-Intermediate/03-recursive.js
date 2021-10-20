// ----------------------------Nomor 1----------------------------

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumOfArray(arr[i]);
    } else {
      sum += arr[i];
    }
  }

  return sum;
}

// ----------------------------Nomor 2----------------------------

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumOfArray(arr[i]);
    } else {
      sum += arr[i];
    }
  }

  return sum;
}

const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
  if (arr.length === 0) {
    return 0;
  }
  return (arr[0] >= avg) + countAboveAvg(arr.slice(1), avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// ----------------------------Nomor 3----------------------------

const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
  if (arr.length === 0) {
    return "angka tidak ditemukan";
  }
  if (arr[arr.length - 1] === num) {
    return "angka ditemukan pada index:" + (arr.length - 1);
  }
  return searchInArray(arr.slice(0, -1), num);
}

// searchInArray(arr, 6);
// searchInArray(arr, 1);
// searchInArray(arr, 8);

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// ----------------------------Nomor 4----------------------------

function trianglePattern(huruf, n) {
  if (huruf == 0) {
    return;
  }
  let space = "";
  for (let i = 0; i < n; i++) {
    if (i < huruf - 1) {
      space += " ";
    } else {
      space += String.fromCharCode(64 + (n - huruf + (i - huruf) + 2));
    }
  }
  console.log(space);
  trianglePattern(huruf - 1, n);
}

trianglePattern(5, 5);
