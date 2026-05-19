class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       return nums.indexOf(target) > -1 ? nums.indexOf(target) : -1;  
    }
}
