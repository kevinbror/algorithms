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
- can optimize by finding a better pivot and get O (log n) (quick sort 3)
    - there are other variations like this too