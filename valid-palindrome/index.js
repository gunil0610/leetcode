// https://leetcode.com/problems/valid-palindrome/
"use strict";

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const removed = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  const reversed = removed.split("").reverse().join("");
  return removed === reversed;
};
