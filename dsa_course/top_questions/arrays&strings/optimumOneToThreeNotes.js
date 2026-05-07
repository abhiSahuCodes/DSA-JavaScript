
/* 
################################## Two Sum ##################################
Question 1: Given an array of numbers and a target value, find the indices of two numbers that add up to the target.

textInput:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]   → because nums[0] + nums[1] = 2 + 7 = 9
*/

/* =========================================
PROBLEM: Two Sum
CATEGORY: HashMap / Frequency Counter
SIGNAL: "find two numbers that add up to", "indices of two numbers", "sum equals target"
=========================================

WHAT AM I LOOKING FOR?
- The indices (positions) of exactly two numbers in the array that together add up to the target.

WHAT WOULD I DO MANUALLY?
- Pick one number, calculate what partner I need (target - that number).
- Check if that partner already exists somewhere before me in the array.
- Example: I see 2, I need 7. Is 7 already there? No — store 2.
            I see 7, I need 2. Is 2 already there? YES → return [0, 1].

WHAT CONTAINER DOES THAT FOR ME?
- A plain JavaScript Object used as a HashMap: const seen = {}
- Key   → the number itself (e.g. 2, 7, 11...)
- Value → its index in the array (e.g. 0, 1, 2...)
- Why Object and not Array? Checking if a key exists in an Object is instant (O(1)).
  Checking if a value exists in an Array means scanning one by one (O(n)).

STEPS (Plain English):
1. Create an empty object: const seen = {}
2. Loop through the array with index i.
3. For each number, calculate its partner: partner = target - nums[i]
4. Check if that partner already exists as a key in seen.
   - If YES → return [seen[partner], i]  (the stored index + current index)
   - If NO  → store the current number and its index: seen[nums[i]] = i
5. If the loop ends with no match, return [] or -1 (no valid pair found).

KEY SYNTAX USED:
- const seen = {}                        → empty object acting as a HashMap
- let num = arr[i]                       → READ from array into variable (array on RIGHT)
- seen[nums[i]] = i                      → store number as key, index as value
- if (seen[partner] !== undefined)       → check if partner key exists in seen
- return [seen[partner], i]             → return both indices as an array

MISTAKE TO WATCH:
- Writing let arr[i] = num  ❌  instead of  let num = arr[i]  ✅
  The array is the SOURCE — it always goes on the RIGHT side of the assignment.
- Storing BEFORE checking: if you do seen[nums[i]] = i first, then check,
  a number could match with ITSELF. Always CHECK first, then STORE.
- Using if (seen[partner]) instead of if (seen[partner] !== undefined) —
  if the index stored is 0, seen[partner] = 0, which is falsy in JS and will fail!

*/

// ---- SOLUTION ----

function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const partner = target - nums[i];
    if (seen[partner] !== undefined) {
      return [seen[partner], i];  // partner's index, current index
    }
    seen[nums[i]] = i;            // check first, THEN store
  }
  return [];
}

/*
EXAMPLE:
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]   → nums[0] + nums[1] = 2 + 7 = 9

BRUTE FORCE:  O(n²) time  O(1) space  ← two nested loops check every pair
OPTIMIZED:    O(n)  time  O(n) space  ← one loop + HashMap for instant lookup

The One Mental Anchor:
Every time you see "two numbers that add to X", your brain should fire one signal:
"I need to find a partner." The formula is always partner = target - currentNumber. 
The HashMap just lets you check if that partner has already walked past you — in 
one step instead of scanning the whole array again.
*/


// ========================================================================================================================



/* 
################################## Reverse a String / Array ##################################
Question 2: Given a string or array, return it in reversed order.

textInput:  "hello"         →  Output: "olleh"
Input:  [1, 2, 3, 4, 5] →  Output: [5, 4, 3, 2, 1]
*/

/* =========================================
PROBLEM: Reverse a String / Array
CATEGORY: Two Pointers / Array Manipulation
SIGNAL: "reverse", "reversed order", "flip", "mirror"
=========================================

WHAT AM I LOOKING FOR?
- Return the same string or array but with all elements in the opposite order.

WHAT WOULD I DO MANUALLY?
- Point one finger at the first element, another finger at the last element.
- Swap them. Move both fingers inward. Repeat until they meet in the middle.
- Example: [1, 2, 3, 4, 5]
            ↑               ↑   swap 1 and 5 → [5, 2, 3, 4, 1]
               ↑         ↑     swap 2 and 4 → [5, 4, 3, 2, 1]
                  ↑ (middle, stop)

WHAT CONTAINER DOES THAT FOR ME?
- A plain Array — we use two pointer variables (left and right) as index markers.
- No extra container needed for the optimized in-place version.
- For a string: strings are immutable in JS, so convert to array first, then reverse, then join back.

STEPS (Plain English):
1. If input is a string, convert it to an array: str.split("")
2. Set left pointer at index 0, right pointer at index array.length - 1.
3. While left < right (pointers haven't crossed):
   a. Swap the elements at left and right positions.
   b. Move left forward: left++
   c. Move right backward: right--
4. If original input was a string, join the array back: arr.join("")
5. Return the result.

KEY SYNTAX USED:
- str.split("")              → converts string "hello" into ["h","e","l","l","o"]
- arr.join("")               → converts ["o","l","l","e","h"] back into "olleh"
- while (left < right)       → loop condition — stop when pointers meet or cross
- [arr[left], arr[right]] = [arr[right], arr[left]]   → ES6 destructuring swap
- arr.length - 1             → index of the last element (not arr.length!)

MISTAKE I MADE (or: MISTAKE TO WATCH):
- Using arr.length instead of arr.length - 1 for the right pointer start —
  arr.length points one slot BEYOND the last element, which is undefined.
- Forgetting that strings are immutable in JS — you CANNOT do str[0] = "x".
  Always split into array first, reverse, then join back.
- Using while (left <= right) instead of while (left < right) —
  if you include the equal case, the middle element gets swapped with itself
  (harmless but unnecessary); more importantly it can cause logic errors in other problems.
- The swap line: writing a = b; b = a; ❌ — this overwrites a before saving it.
  Always use a temp variable OR the destructuring swap shown above.

*/

// ---- SOLUTION ----

// Reverse an Array (in-place, Two Pointers)
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
    left++;
    right--;
  }
  return arr;
}

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join(""); // JS shortcut using built-in
}

// Reverse a String (Two Pointers — same logic, no built-in)
function reverseStringManual(str) {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}

/*
EXAMPLE:
Input:  "hello"          →  Output: "olleh"
Input:  [1, 2, 3, 4, 5]  →  Output: [5, 4, 3, 2, 1]

BRUTE FORCE:  O(n) time  O(n) space  ← build a new reversed array/string
OPTIMIZED:    O(n) time  O(1) space  ← swap in-place, no extra array needed

The One Mental Anchor
Every time you see "reverse", think: two hands moving inward, swapping as they go.
Left starts at index 0, right starts at arr.length - 1, and they walk toward each 
other until they meet. The only extra rule for strings is the split → work → join 
sandwich, because JS strings cannot be changed in place.
*/

// ========================================================================================================================



/* 
################################## Check Pallindrome ##################################
Question 3: A string is a palindrome if it reads the same forwards and backwards. Check if a given string is a palindrome.

textInput: "racecar"  →  Output: true   (racecar reversed = racecar)
Input: "hello"    →  Output: false  (hello reversed = olleh)
*/

/* =========================================
PROBLEM: Check Palindrome
CATEGORY: Two Pointers / String
SIGNAL: "palindrome", "reads the same forwards and backwards", "symmetric"
=========================================

WHAT AM I LOOKING FOR?
- Return true if the string is the same when reversed, false if it is not.

WHAT WOULD I DO MANUALLY?
- Point one finger at the first letter, another at the last letter.
- Compare them — are they the same?
- If yes, move both fingers inward and compare again.
- If at any point they don't match → it's NOT a palindrome.
- If fingers meet in the middle without a mismatch → it IS a palindrome.
- Example: "racecar"
            r == r ✅ → move inward
              a == a ✅ → move inward
                c == c ✅ → middle reached → true

WHAT CONTAINER DOES THAT FOR ME?
- No container needed — just two pointer variables (left and right) as index markers.
- We compare characters directly using bracket notation: str[left] vs str[right].

STEPS (Plain English):
1. Set left pointer at index 0, right pointer at str.length - 1.
2. While left < right:
   a. Compare str[left] and str[right].
   b. If they are NOT equal → return false immediately.
   c. If they ARE equal → move left forward (left++), move right backward (right--).
3. If the loop finishes without returning false → return true.

KEY SYNTAX USED:
- str[left]                  → access character at index left (same as str.charAt(left))
- str.toLowerCase()          → normalize case before comparing ("A" vs "a" = same)
- str.replace(/[^a-z0-9]/g, "") → remove spaces/punctuation if needed (real interviews!)
- while (left < right)       → stop when pointers meet or cross
- return false               → exit early the moment a mismatch is found
- return true                → placed OUTSIDE the loop, reached only if no mismatch

MISTAKE TO WATCH:
- Placing return true INSIDE the loop ❌ — it would return true after just the
  first matching pair, before checking the rest of the string.
  return true must be OUTSIDE and AFTER the while loop.
- Forgetting case sensitivity — "Racecar" would fail without .toLowerCase() first.
- Using str.length instead of str.length - 1 for the right pointer start —
  str.length is out of bounds, always subtract 1.
- Shortcut trap: str.split("").reverse().join("") === str works but is O(n) space.
  Two Pointers is O(1) space and shows you actually understand the mechanism.

*/

// ---- SOLUTION ----

// Two Pointers (Optimized — O(1) space)
function isPalindrome(str) {
  str = str.toLowerCase();          // normalize case
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;                 // mismatch found → not a palindrome
    }
    left++;
    right--;
  }
  return true;                      // ← OUTSIDE the loop
}

// Shortcut (readable, but O(n) space — good to know, not the best answer)
function isPalindromeShortcut(str) {
  const cleaned = str.toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

/*
EXAMPLE:
Input:  "racecar"  →  Output: true
Input:  "hello"    →  Output: false

BRUTE FORCE:  O(n) time  O(n) space  ← reverse the string, compare to original
OPTIMIZED:    O(n) time  O(1) space  ← two pointers, no extra string created

The One Mental Anchor
Palindrome is just Reverse a String in disguise — same two pointers, same inward 
movement. The only difference is: instead of swapping, you compare. The moment one
pair doesn't match, you're done — return false immediately. If you survive the 
whole loop, return true — but only outside the loop, never inside it.

*/