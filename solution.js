/**
 * STN-7 Problem Solving Assessment — Solution File
 * All 20 problems implemented in a single file (JavaScript).
 *
 * Each problem is clearly separated with comments containing the problem
 * number and title. Function names and parameter structures match the
 * provided signatures exactly.
 */

/* ========================================================================
   Problem 1: Staircase
   Construct a right-aligned staircase using '#' and spaces.
   ======================================================================== */
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function(n) {
    var rows = [];
    for (var i = 1; i <= n; i++) {
        var spaces = " ".repeat(n - i);
        var hashes = "#".repeat(i);
        rows.push(spaces + hashes);
    }
    return rows.join("\n");
};

/* ========================================================================
   Problem 2: Grading Students
   Round grades according to the specified rules.
   ======================================================================== */
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades) {
    var result = [];
    for (var i = 0; i < grades.length; i++) {
        var grade = grades[i];
        if (grade < 38) {
            result.push(grade);
            continue;
        }
        var nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
            result.push(nextMultipleOf5);
        } else {
            result.push(grade);
        }
    }
    return result;
};

/* ========================================================================
   Problem 3: Time Conversion
   Convert 12-hour clock format to 24-hour clock format.
   ======================================================================== */
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s) {
    var period = s.slice(-2); // "AM" or "PM"
    var timePart = s.slice(0, 8); // "HH:MM:SS"
    var parts = timePart.split(":");
    var hour = parseInt(parts[0], 10);
    var minute = parts[1];
    var second = parts[2];

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else { // PM
        if (hour !== 12) {
            hour += 12;
        }
    }

    var hourStr = hour < 10 ? "0" + hour : String(hour);
    return hourStr + ":" + minute + ":" + second;
};

/* ========================================================================
   Problem 4: String Repeat
   Repeat a string exactly n times.
   ======================================================================== */
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n, s) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += s;
    }
    return result;
};

/* ========================================================================
   Problem 5: Reversed Strings
   Return a new string with characters in reverse order.
   ======================================================================== */
/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};

/* ========================================================================
   Problem 6: Sum of Positive
   Sum all positive numbers (strictly greater than zero).
   ======================================================================== */
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
};

/* ========================================================================
   Problem 7: Grasshopper — Summation
   Sum of all integers from 1 through num.
   ======================================================================== */
/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {
    // Mathematical formula: n*(n+1)/2, O(1) time and space
    return (num * (num + 1)) / 2;
};

/* ========================================================================
   Problem 8: Convert a Boolean to a String
   Convert boolean to its string representation.
   ======================================================================== */
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b) {
    return b ? "true" : "false";
};

/* ========================================================================
   Problem 9: Fizz Buzz
   Generate FizzBuzz sequence from 1 through n.
   ======================================================================== */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }
    return result;
};

/* ========================================================================
   Problem 10: Running Sum of 1D Array
   Calculate running sum at every index.
   ======================================================================== */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var result = [];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }
    return result;
};

/* ========================================================================
   Problem 11: Richest Customer Wealth
   Return the maximum total wealth among all customers.
   ======================================================================== */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var maxWealth = 0;
    for (var i = 0; i < accounts.length; i++) {
        var customerWealth = 0;
        for (var j = 0; j < accounts[i].length; j++) {
            customerWealth += accounts[i][j];
        }
        if (customerWealth > maxWealth) {
            maxWealth = customerWealth;
        }
    }
    return maxWealth;
};

/* ========================================================================
   Problem 12: Remove Duplicates from Sorted Array
   Remove duplicates in-place; return count of unique elements.
   ======================================================================== */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    var writeIndex = 1;
    for (var readIndex = 1; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== nums[readIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    return writeIndex;
};

/* ========================================================================
   Problem 13: Contains Duplicate
   Return true if any value appears at least twice.
   ======================================================================== */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var seen = new Set();
    for (var i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
    }
    return false;
};

/* ========================================================================
   Problem 14: Move Zeroes
   Move all zeroes to the end in-place, preserving non-zero order.
   ======================================================================== */
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {
    var writeIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    for (var i = writeIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/* ========================================================================
   Problem 15: Merge Sorted Array
   Merge nums2 into nums1 in-place (nums1 has m+n length).
   ======================================================================== */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function(nums1, m, nums2, n) {
    var i = m - 1; // last valid element in nums1
    var j = n - 1; // last element in nums2
    var k = m + n - 1; // last position in nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

/* ========================================================================
   Problem 16: 3Sum
   Find all unique triplets that sum to zero.
   ======================================================================== */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    nums.sort(function(a, b) { return a - b; });

    for (var i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Early termination: since sorted, if nums[i] > 0, no triplet can sum to 0
        if (nums[i] > 0) break;

        var left = i + 1;
        var right = nums.length - 1;

        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

/* ========================================================================
   Problem 17: Plus One
   Increment the integer represented by digits by one.
   ======================================================================== */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    // All digits were 9: need to add a leading 1
    digits.unshift(1);
    return digits;
};

/* ========================================================================
   Problem 18: Reverse String
   Reverse characters in-place.
   ======================================================================== */
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function(s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        var temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};

/* ========================================================================
   Problem 19: Length of Last Word
   Return the length of the last word in the string.
   ======================================================================== */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var trimmed = s.trim();
    if (trimmed.length === 0) return 0;
    var lastSpaceIndex = trimmed.lastIndexOf(" ");
    return trimmed.length - lastSpaceIndex - 1;
};

/* ========================================================================
   Problem 20: Longest Common Prefix
   Find the longest common prefix shared by every string.
   ======================================================================== */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        var current = strs[i];
        var j = 0;
        while (
            j < prefix.length &&
            j < current.length &&
            prefix[j] === current[j]
        ) {
            j++;
        }
        prefix = prefix.slice(0, j);
        if (prefix === "") return "";
    }
    return prefix;
};

/* ========================================================================
   Exports (for test harness / module usage)
   ======================================================================== */
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        staircase: staircase,
        gradingStudents: gradingStudents,
        timeConversion: timeConversion,
        repeatStr: repeatStr,
        solution: solution,
        positiveSum: positiveSum,
        summation: summation,
        booleanToString: booleanToString,
        fizzBuzz: fizzBuzz,
        runningSum: runningSum,
        maximumWealth: maximumWealth,
        removeDuplicates: removeDuplicates,
        containsDuplicate: containsDuplicate,
        moveZeroes: moveZeroes,
        merge: merge,
        threeSum: threeSum,
        plusOne: plusOne,
        reverseString: reverseString,
        lengthOfLastWord: lengthOfLastWord,
        longestCommonPrefix: longestCommonPrefix,
    };
}
