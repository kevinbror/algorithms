/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

*/

class Tree {
  // code goes here
  constructor () {
    this.root = null;
  }

  add (value) {
    if (!this.root) {
      this.root = new Node(value);
    }
    else {
      this.root.add(value);
    }
  }
  toObject () {
    return this.root;
  }
}

class Node {
  // code also goes here
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }

  _addOrSetChild (value, orientation) {
    if (!this[orientation]) {
      this[orientation] = new Node(value);
    }
    else {
      this[orientation].add(value);
    }
    // update height
    const oppositeOrientation = orientation === 'right' ? 'left' : 'right';
    if (!this[oppositeOrientation] || this[oppositeOrientation].height < this[orientation].height) { 
      this.height = this[orientation].height + 1;
    }
  }

  add (value) {
    const node = new Node(value);
    if (value === this.value) {
      return;
    }
    // if this value is less put it in the left sub tree
    else if (value < this.value) {
      this._addOrSetChild(value, 'left');
    }
    // if this value is more put it in the right sub tree
    else if (value > this.value) {
      this._addOrSetChild(value, 'right');    
    }
    this.balance();
  }

  balance() {
    // console.log('before: ', {
    //   value: this.value, 
    //   height: this.height
    // });
    const rightHeight = this.right?.height || 0;
    const leftHeight = this.left?.height || 0;

    if (leftHeight > rightHeight + 1) { // difference of greater than 2 means they are not balanced
      // we are left heavy, rotate right
      const leftRightHeight = this.left?.right?.height || 0;
      const leftLeftHeight = this.left?.left?.height || 0;

      // handle double rotation if needed
      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR(true);
      }

      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) { // difference of greater than 2 means they are not balanced
      // we are right heavy rotate left
      const rightRightHeight = this.right?.right?.height || 0;
      const rightLeftHeight = this.right?.left?.height || 0;

      // handle double rotation if needed
      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL(true);
      }

      this.rotateRR();
    }
    // console.log('after: ', {
    //   value: this.value, 
    //   height: this.height
    // });
  }

  rotateRR (isDouble) {
    // call if left child is heavy
    console.log({ isDouble, 'left left': this.left?.left, 'right right': this.right?.right });
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL (isDouble) {
    // call when right child is heavy
    console.log({ isDouble, 'left left': this.left?.left, 'right right': this.right?.right });
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    // update height
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      this.height = this.left.height + 1;
    } else {
      //if (!this.left || this.right.height > this.left.height)
      this.height = this.right.height + 1;
    }
  }

  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    ans.height = this.height;
    return ans;
  }
}

// unit tests
// do not modify the below code
describe("AVL Tree", function () {
  test("creates a correct tree", () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();

    expect(objs.value).toEqual(4);

    expect(objs.left.value).toEqual(2);

    expect(objs.left.left.value).toEqual(1);
    expect(objs.left.left.left).toBeNull();
    expect(objs.left.left.right).toBeNull();

    expect(objs.left.right.value).toEqual(3);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(6);
    expect(objs.right.left.right).toBeNull();

    expect(objs.right.left.left.value).toEqual(5);
    expect(objs.right.left.left.left).toBeNull();
    expect(objs.right.left.left.right).toBeNull();

    expect(objs.right.right.value).toEqual(9);

    expect(objs.right.right.left.value).toEqual(8);
    expect(objs.right.right.left.left).toBeNull();
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.right.value).toEqual(10);
    expect(objs.right.right.right.left).toBeNull();
    expect(objs.right.right.right.right).toBeNull();
  });
});
