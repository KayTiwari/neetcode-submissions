class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let l = Math.floor(nums.length/2)
       while (l > -2) {
            if (nums[l] === target) {
                return l;
            }
            else if (nums[l] < target && !(nums[l + 1] > target)) {
                l++;
            }
            else if (nums[l] > target && !(nums[l - 1] < target)) {
                l--;
            }
            else return -1
       }
    }
}
