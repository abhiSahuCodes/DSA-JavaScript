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

  let write = 0;                         // slow pointer — last unique position

  for (let read = 1; read < arr.length; read++) {
    if (arr[read] !== arr[write]) {      // found a new unique number
      write++;                           // move write forward
      arr[write] = arr[read];            // place the unique number there
    }
  }

  return write + 1;                      // number of unique elements
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



