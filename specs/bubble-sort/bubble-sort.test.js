/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function loopArrayWithSwap(array, didSwap = false) {
  for (let i = 0; i < nums.length; ++i) {
    const first = nums[i];
    const second = nums[i + 1];
    if (first > second) {
      // swap
      nums[i] = second;
      nums[i + 1] = first;
    }
  }
  return nums;
}

function bubbleSort(nums, iterations = 0) {
  // code goes here
  let swapped = false;
  for (let current = 0; current < nums.length - iterations; ++current) {
    const next = current + 1;
    const first = nums[current];
    const second = nums[next];
    if (first > second) {
      // swap
      swapped = true;
      nums[current] = second;
      nums[next] = first;
    }
  }
  if (swapped) {
    return bubbleSort(nums, iterations + 1);
  }
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  console.log({ sortedNums });
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
