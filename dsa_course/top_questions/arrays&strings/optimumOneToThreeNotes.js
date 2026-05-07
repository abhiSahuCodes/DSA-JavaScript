
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

