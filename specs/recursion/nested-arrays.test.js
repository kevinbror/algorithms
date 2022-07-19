/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function nestedAdd(array) {
  // write code here
  const isNumber = typeof array === 'number';
  if (isNumber) {
    return array;
  }
  else if (!array.length) {
    return 0;
  }
  console.log(array);
  // console.log(array[0], array.slice(1, array.length))
  return nestedAdd(array[0]) + nestedAdd(array.slice(1, array.length))
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
