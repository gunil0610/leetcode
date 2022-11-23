// https://leetcode.com/problems/majority-element/
"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  let res = nums[0];

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  map.forEach((v, k) => {
    if (v > nums.length / 2) {
      res = k;
    }
  });
  return res;
};
