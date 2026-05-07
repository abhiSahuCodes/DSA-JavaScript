/* 
################################## Remove Duplicates from a Sorted Array ##################################
Question 4: Given a sorted array, remove the duplicate numbers and return only the unique elements (in-place, from the front).

textInput:  [1, 1, 2, 3, 3, 4]
Output: [1, 2, 3, 4]  → 4 unique elements
*/

/* =========================================
PROBLEM: Remove Duplicates from a Sorted Array
CATEGORY: Two Pointers / Array
SIGNAL: "sorted array", "remove duplicates", "unique elements", "in-place"
=========================================

WHAT AM I LOOKING FOR?
- Return only the unique elements from a sorted array, modifying it from the front.

WHAT WOULD I DO MANUALLY?
- Walk through the array left to right.
- Keep a "write position" finger that only moves forward when you find a NEW number.
- Compare each number to the last unique number you wrote.
- If it's different → write it at the write position, advance the write finger.
- If it's the same → skip it, do nothing.
- Example: [1, 1, 2, 3, 3, 4]
            write=0, read=1 → 1==1, skip
            write=0, read=2 → 2≠1, write 2 at position 1, write=1
            write=1, read=3 → 3≠2, write 3 at position 2, write=2 ... and so on

WHAT CONTAINER DOES THAT FOR ME?
- No extra container — we work in-place on the same array.
- Two pointer variables: write (slow pointer) and read (fast pointer).
- write tracks where to place the next unique number.
- read scans ahead looking for new numbers.

STEPS (Plain English):
1. If the array is empty, return 0.
2. Set write pointer at index 0 (first element is always unique).
3. Loop read from index 1 to the end of the array.
4. At each step, compare arr[read] with arr[write].
   - If they are DIFFERENT → move write forward (write++), copy arr[read] into arr[write].
   - If they are the SAME  → do nothing, just let read keep moving.
5. Return write + 1 (the count of unique elements).

KEY SYNTAX USED:
- arr[write] = arr[read]     → overwrite the write position with the new unique value
- write++                    → advance the slow pointer ONLY when a new value is found
- for (let read = 1; ...)    → read starts at 1 because index 0 is always unique
- return write + 1           → write is an index (0-based), so add 1 to get the count
- arr[read] !== arr[write]   → compare current element to the last written unique element

MISTAKE TO WATCH:
- Starting read at 0 instead of 1 — index 0 is always unique by definition,
  starting read at 0 causes you to compare the first element with itself.
- Doing write++ before the copy instead of after ❌
  Always: write++ first, THEN arr[write] = arr[read]. Or combine: arr[++write] = arr[read].
- Returning write instead of write + 1 — write is an index, not a count.
  Index 3 means 4 unique elements (0, 1, 2, 3).
- This only works on a SORTED array — duplicates must be adjacent for this
  comparison to catch them all. On an unsorted array, use a Set instead.

*/

// ---- SOLUTION ----

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let write = 0; // slow pointer — last unique position

  for (let read = 1; read < arr.length; read++) {
    if (arr[read] !== arr[write]) {
      // found a new unique number
      write++; // move write forward
      arr[write] = arr[read]; // place the unique number there
    }
  }

  return write + 1; // number of unique elements
}

/*
EXAMPLE:
Input:  [1, 1, 2, 3, 3, 4]
Output: [1, 2, 3, 4]  → returns 4, first 4 elements of array are now unique

BRUTE FORCE:  O(n) time  O(n) space  ← filter into a new array using a Set
OPTIMIZED:    O(n) time  O(1) space  ← two pointers, modify the array in-place

MENTAL ANCHOR:
Two runners on the same track — read sprints ahead, write only steps
forward when read finds something NEW. write always points at the
last unique number written. They work on the SAME array, no extra space needed.
*/

// ========================================================================================================================

/* 
################################## Find the Maximum / Minimum in an Array ##################################
Question 5: Given an array of numbers, find the largest (maximum) and smallest (minimum) number.

textInput:  [3, 1, 9, 2, 7]
Output: Max = 9,  Min = 1
*/

/* =========================================
PROBLEM: Find the Maximum / Minimum in an Array
CATEGORY: Array / Linear Scan
SIGNAL: "largest", "smallest", "maximum", "minimum", "highest", "lowest"
=========================================

WHAT AM I LOOKING FOR?
- Return the single largest number and the single smallest number from the array.

WHAT WOULD I DO MANUALLY?
- Assume the first number is both the biggest and smallest you have seen so far.
- Walk through the rest of the array one by one.
- Every time you see a number bigger than your current max, update the max.
- Every time you see a number smaller than your current min, update the min.
- Example: [3, 1, 9, 2, 7]
            Start: max=3, min=3
            See 1 → 1 < 3, update min=1
            See 9 → 9 > 3, update max=9
            See 2 → nothing changes
            See 7 → nothing changes
            Done: max=9, min=1

WHAT CONTAINER DOES THAT FOR ME?
- No container needed — just two variables: max and min.
- We update them as we scan, nothing is stored or grouped.

STEPS (Plain English):
1. Set both max and min to the first element of the array: arr[0].
2. Loop through the array starting from index 1 (we already handled index 0).
3. At each element, compare it to the current max:
   - If it is greater → update max.
4. At each element, compare it to the current min:
   - If it is smaller → update min.
5. After the loop, return both max and min.

KEY SYNTAX USED:
- let max = arr[0]           → initialize to first element, not 0 or -Infinity
- let min = arr[0]           → same — works for negative numbers too
- for (let i = 1; ...)       → start from 1, index 0 is already captured
- if (arr[i] > max)          → strictly greater than, then update
- if (arr[i] < min)          → strictly less than, then update
- return { max, min }        → return both values as an object (shorthand)
- Math.max(...arr)           → JS built-in shortcut (know it, but show the loop in interviews)

MISTAKE TO WATCH:
- Initializing max = 0 and min = 0 ❌ — if the array has all negative numbers
  like [-5, -3, -8], your max would wrongly stay 0. Always initialize to arr[0].
- Starting the loop at index 0 instead of 1 — wastes one comparison since
  arr[0] is already captured in max and min before the loop begins.
- Using Math.max(...arr) in interviews without explaining the loop version —
  interviewers want to see you understand the scanning mechanism, not just the shortcut.
- Forgetting that the array could have one element — initializing to arr[0]
  handles this naturally since the loop simply doesn't run.

*/

// ---- SOLUTION ----

function findMaxMin(arr) {
  let max = arr[0]; // assume first element is both
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // new champion found
    }
    if (arr[i] < min) {
      min = arr[i]; // new lowest found
    }
  }

  return { max, min };
}

/*
EXAMPLE:
Input:  [3, 1, 9, 2, 7]
Output: { max: 9, min: 1 }

BRUTE FORCE:  O(n²) time  O(1) space  ← compare every element against every other
OPTIMIZED:    O(n)  time  O(1) space  ← single pass, two tracking variables

MENTAL ANCHOR:
Imagine you are a judge watching contestants walk past you one by one.
Before anyone walks in, you pick the very first person and say:
"You are currently the tallest and the shortest I have seen."
Then for every new person who walks in, you ask two questions:
"Are you taller than my current tallest?" — if yes, they become the new tallest.
"Are you shorter than my current shortest?" — if yes, they become the new shortest.
By the time the last person walks past, you have your final answer.
You never needed to remember everyone — just the two record holders at any moment.
*/


// ========================================================================================================================



/* 
################################## Rotate an Array by K steps ##################################
Question 6: Given an array, rotate (shift) it to the right by K steps. Every element moves K positions to the right, 
            and elements at the end wrap around to the front.

textInput:  [1, 2, 3, 4, 5],  k = 2
Output: [4, 5, 1, 2, 3]
         ↑ last 2 elements come to the front
*/

/* =========================================
PROBLEM: Rotate an Array by K Steps
CATEGORY: Array / Two Pointers (Reversal Trick)
SIGNAL: "rotate", "shift right by K", "elements wrap around to the front"
=========================================

WHAT AM I LOOKING FOR?
- Return a new arrangement of the array where every element has moved K positions
  to the right, and the last K elements now sit at the front.

WHAT WOULD I DO MANUALLY?
- Take the last K elements from the end of the array.
- Place them at the front.
- Keep the rest of the elements in their original order after them.
- Example: [1,2,3,4,5], k=2 → take [4,5] → put in front → [4,5,1,2,3]

WHAT CONTAINER DOES THAT FOR ME?
- A plain Array — we're just slicing and joining two halves.
- No key/value needed. We use array.slice() to split at the cut point.
- Cut point = array.length - k

STEPS (Plain English):
1. Handle edge case: if k is larger than the array, use k = k % array.length
   (rotating by the full length is the same as not rotating at all).
2. Find the cut point: cutIndex = array.length - k
   (this is where the "back half" starts).
3. Slice the back half: array.slice(cutIndex) → this gives the last K elements.
4. Slice the front half: array.slice(0, cutIndex) → this gives the remaining elements.
5. Concatenate: [...backHalf, ...frontHalf] and return.

KEY SYNTAX USED:
- array.slice(start, end)       → extracts portion WITHOUT modifying original
- array.slice(cutIndex)         → from cutIndex to the END of the array
- array.slice(0, cutIndex)      → from index 0 UP TO (not including) cutIndex
- k % array.length              → prevents over-rotation if k > array.length
- [...arr1, ...arr2]            → spreads two arrays into one (or use arr1.concat(arr2))

MISTAKE I MADE (or: MISTAKE TO WATCH):
- Forgetting k % array.length: if k = 7 and array length = 5,
  you'd try to slice beyond the array — always normalize k first.
- Confusing the cut point: it's array.length - k, NOT k itself.
  Think of it as "where does the back half start?" not "where does it end?"
- Using splice() instead of slice() — splice MUTATES the array, slice does NOT.

*/

// ---- SOLUTION ----

function rotateArray(arr, k) {
  k = k % arr.length;              // normalize k
  const cutIndex = arr.length - k; // find the split point
  const backHalf = arr.slice(cutIndex);     // last K elements
  const frontHalf = arr.slice(0, cutIndex); // remaining elements
  return [...backHalf, ...frontHalf];
}

/*
EXAMPLE:
Input:  [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]

BRUTE FORCE:  O(n) time  O(n) space  ← slice + concat makes a new array
OPTIMIZED:    O(n) time  O(1) space  ← in-place reversal trick
              (reverse whole array, reverse first k, reverse rest)
              
Quick Mental Model:
The key insight to remember: the last K elements become the new front. 
So the "cut" always happens at array.length - k — that's the dividing line between 
what goes to the front and what stays behind.

The % array.length normalization is the most common mistake point to watch — 
if k = 5 on a 5-element array, rotating by the full length changes nothing, 
so 5 % 5 = 0 correctly handles it.
*/

