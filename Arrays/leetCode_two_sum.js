/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Example:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
function twoSum(integers, target) {
  for (let i = 0; i < integers.length; i++) {
    for (let j = i + 1; j < integers.length; j++) {
      if (integers[i] + integers[j] == target) {
        return [i, j];
      }
    }
  }
  /*
  for (let i = 0; i < integers.length; i++) {
    let complement = target - integers[i];

    let complementIndex = integers.indexOf(complement, i + 1);

    if (complementIndex != -1) {
      return [i, complementIndex];
    }
  }
  */
}

let result = twoSum([2, 7, 11, 15], 6);
console.log(result);
