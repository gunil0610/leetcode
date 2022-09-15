// https://leetcode.com/problems/two-sum/
"use strict";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let obj = {};
  let i = 0;
  let res = [];
  nums.map((num) => {
    const searching = (target - num).toString();

    if (!(num in obj)) {
      obj[searching] = i;
      i++;
    } else {
      res.push(obj[num]);
      res.push(i);
    }
  });

  return res;
};

console.log(twoSum([2, 7, 11, 15], 9));
