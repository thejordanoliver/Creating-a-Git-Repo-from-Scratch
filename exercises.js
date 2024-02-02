const arrayOfArrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];

const flattenedArray = arrayOfArrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);

function loop(n, testFunc, updateFunc, bodyFunc) {
  while (testFunc(n)) {
    bodyFunc(n);
    n = updateFunc(n);
  }
}

loop(
  0,
  (n) => n < 5,
  (n) => n + 1,
  (n) => console.log(n)
);

export function everyLoop(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) {
      return false;
    }
  }
  return true;
}

export function everySome(array, predicate) {
  return !array.some((element) => !predicate(element));
}

// Example usage:
const isEven = (num) => num % 2 === 0;

const array1 = [2, 4, 6, 8, 10];
console.log(everyLoop(array1, isEven));
console.log(everySome(array1, isEven));

const array2 = [2, 4, 6, 7, 10];
console.log(everyLoop(array2, isEven));
console.log(everySome(array2, isEven));
