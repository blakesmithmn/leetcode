//Given an array of integers nums, calculate the pivot index of this array.

//The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

//If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.


/**
 * @param {number[]} nums
 * @return {number}2222
 */
var pivotIndex = function (nums) {

    // loop through the array
    // compare the sum of 'left' numbers to 'right' numbers
    // return index where they are equal
    // OR return -1 if there isn't a match to requirements
    let leftSum = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        if (leftSum == sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1

};

