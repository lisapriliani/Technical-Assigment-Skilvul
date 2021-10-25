////---------------Nomor 1--------------------------

const arr1 = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

const newArr1 = reverse(arr1);
const newArr2 = reverse(arr2);

console.log(arr1, newArr1);
console.log(arr2, newArr2);

////---------------Nomor 2--------------------------

const arr3 = [1, 3, 4, 1, 2, 8];
const arr4 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) avg += arr[i];

  avg = avg / arr.length;

  let newArray = [];
  for (let i = 0; i < arr.length; i++) if (arr[i] > avg) newArray.push(arr[i]);

  return newArray.length;
}

console.log(getAverage(arr3));
console.log(getAverage(arr4));

////---------------Nomor 3--------------------------

const arr = [[10], [9, 7, 1], [2, 8]];

function searchInArray(arr, a) {
  const flattenArray = arr.flat();
  const result = flattenArray.indexOf(a);
  return result > 0 ? result : null;
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
