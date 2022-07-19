/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (sortedA, sortedB) => {

  // assumes the length of arrays sortedA and sortedB only differ by one
  // [1, 2, 5] [3, 8, 11, 15]
  const results = []
  while (sortedA.length && sortedB.length) {
    if (sortedA[0] > sortedB[0]) {
      results.push(sortedB.shift());
    }
    else {
      results.push(sortedA.shift())
    }
  }
  return results.concat(sortedA, sortedB);
}

const mergeSort = (nums) => {
  // code goes here
  if (nums.length === 1) {
    return nums;
  }
  // split arrays
  const half = Math.floor(nums.length / 2);
  const left = nums.slice(0, half);
  const right = nums.slice(half);
  console.log({ left, right });
  // get to base case of 1
  return merge(mergeSort(left), mergeSort(right));
  // merge
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
