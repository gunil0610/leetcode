// https://leetcode.com/problems/single-number/
"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((prev, cur) => prev ^ cur);
};
