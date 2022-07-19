/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // code goes here
  // base case 
  if (nums.length <= 1) {
    return nums;
  }

  // find pivot and split into left and right around pivot
  const pivot = nums.pop();
  const left = [];
  const right = [];
  while (nums.length) {
    const current = nums.pop();
    console.log({ current });
    if (current > pivot) {
      right.push(current);
    }
    else {
      left.push(current);
    }
  }

  // call quickSort on both left and right
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // merge left, pivot, right
  const merged = sortedLeft.concat(pivot, sortedRight);
  return merged;
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);
  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
