const breadthFirstTraverse = (queue, array) => {
  // fill code in here

  // dequeue item, enqueue item's children, process item
  // iterative
  while (queue.length) {
    const current = queue.shift();
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    array.push(current.value);
  }
  return array;

  // recursive
  // if (!queue.length) {
  //   return array;
  // }
  // const current = queue.shift();
  // if (current.left) {
  //   queue.push(current.left);
  // }
  // if (current.right) {
  //   queue.push(current.right);
  // }
  // array.push(current.value);
  // return breadthFirstTraverse(queue, array);
};

// unit tests
// do not modify the below code
describe("breadth-first tree traversal", function () {
  const answer = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

  const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null
        },
        right: {
          value: "J",
          left: null,
          right: null
        }
      },
      right: null
    }
  };

  test("breadthFirstTraverse", () => {
    console.log(breadthFirstTraverse([tree], []))
    expect(breadthFirstTraverse([tree], [])).toEqual(answer);
  });
});
