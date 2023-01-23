// Given an array of integers nums and an integer target, return indices of the two number such that they add up to target
// you may assume that each input would have exactly one solution and you may not use the same element twice
// you can return the answer in any order

// example:
// Input nums = [2, 6, 11, 15], target = 9
// output [0, 1]
// solution: because nums[0] + nums [1] == 9, we return [0,1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// test case [2,7,11,15] with target 9


var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (map.has(difference)) {
            return [map.get(difference), i]
        }
        map.set(nums[i], i)
    }


    // easier to get this done with a map
    // for (let i = 0; i < nums.length; i++) {
    //     let sum = num[i];
    //     for (let i = )
    //     if (sum === target)
    // }
};