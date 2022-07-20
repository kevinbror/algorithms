# BigO

- O(1) constant time
- O(n) linear time
- O(n sq) quadratic time
- O(log n) logrithmic time [takes longer for longer input but the increase proportionally decreases. Does it approach parallel at infinity?]

# Bubble Sort

- big numbers bubble to the top
- iterate checking each sequential pair, swap if out of order, loop again if swapped on any pair
- time complexity: quadratic O(n sq) - worst case we compare all items to all items
- space complexity: constant O(n) - we operate on the same array the whole time mutating it
- stable? yes, we only swap when there is inequality
- destructive? yes, it mutates the input

# Insert sort

- ok for mostly sorted lists
- time complexity: quadratic O(n sq) - worst case reverse sorted list
- space complexity: constant O(n) - we operate on the same array the whole time mutating it
- stable? yes, we only swap when there is inequality
- destructive? yes, it mutates the input

# Recursion
- often less performan
- fibonacci is was faster with iteration
- Keys - what's the base case? where do I recurse?

# Merge Sort
- alg executes in the same time complexity no matter how sorted or unsorted the array is
- time complexity: logarithmic O(log n)
- space complexity: linear O(n * k)
- stable: yes
- destructive: no

# Quick sort
- can be done in the passed in array giving optimal space complexity (1)
- better space complexity than merge sort
- if the pivot is the greatest it can be O (n squared) since we lose the benefit of recursion. Sorted arrays are terrible. Dig into this to better understand why this ends up comparing every element against every element
- can optimize  finding a better pivot and get O (log n) (quick sort 3)
    - there are other variations like this too
- time complexity: best - O (log n) / worst - O (n squared) [with sorted array]
- space complexity: depends. Can be 1, n, log n depending on implementation
- stable: no
- destructive: depends on implementation
- See https://www.geeksforgeeks.org/quick-sort/ for in place sort example

# Radix sort
- other name: bucket sort
- non comparison sort
- works well for large numbers over a large range
- time complexity: O (n * k)

# Binary search
- works on sorted arrays
- time complexity: O (log n)
- space complexity: n

# ArrayList 
- good for adding to end, lookups
- bad for deletions/inserts in the middle/beginning
- lookup O(1) constant
- deletion O(N)

# LinkedList
- good for insertion/deletion. not great for lookups

# Binary search trees (BST)
- Always ordered
- Binary (two children per node at most)
- Use case is searching
- left node children are always less than any parent, right node are always greater
- lookups in BSTs are O (log n)
- DBs (like mongo use trees to store indexes)
- Don't use basic BSTs in production because you can hit wortcase scenarios with unbalanced trees. AVLs and red/black trees (self balancing) mitigate this

# AVL trees
- still tend not to see these in prod. red/black are better. but it's a simple example of a self balancing tree
- defined as unbalanced if one or more nodes have a child height difference of 2 or more. i.e. in 7 - 8 - 9, 7 has two right children (8 and 9) and no left children. A left rotation would balance this
- adding logic is the same as BST. Just need to track height of each node and implement balancing. 

# Traversals
- Preorder traversal - get all node values in the order they occur depth first left to right
- Inorder - sorted: same as preorder but only add when we find the next lowest
- Postorder - 