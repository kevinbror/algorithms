/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function crossAdd(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}

function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}

// O(1) constant time
// O(n) linear time
// O(n sq) quadratic time
// O(log n) logrithmic time [takes longer for longer input but the increase proportionally decreases. Does it approach parallel at infiinity?]

// unit tests
test("cross add", function () {
  const nums = [1, 2, 3, 5];
  const res = crossAdd(nums);
  expect(res).toEqual([6, 5, 5, 6]);
});

test("makeTuples", function () {
  const nums = [1, 2, 3];
  const res = makeTuples(nums);
  expect(res).toEqual([
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ]);
});
