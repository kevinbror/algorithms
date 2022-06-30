# BigO

- O(1) constant time
- O(n) linear time
- O(n sq) quadratic time
- O(log n) logrithmic time [takes longer for longer input but the increase proportionally decreases. Does it approach parallel at infiinity?]

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
