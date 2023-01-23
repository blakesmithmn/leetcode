/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.

var runningSum = function (nums) {
    // we need somewhere to put the final array so let's create an array to export!
    let newnums = [];
    // we need somewhere to store the previous sum so that it can be referenced when looping ... and it should be scoped outside the loop
    let storednumber = 0;
    for (let i = 0; i < nums.length; i++) {
        // a sum variable that clears each loop for scope reasons
        let sum = 0;
        // use our stored number from the previous iteration to continue our loop
        sum = storednumber + nums[i];
        // add the value into the final array 
        newnums.push(sum);
        // set the stored number to be the result of this iteration
        storednumber = sum;
    }
    return newnums
};