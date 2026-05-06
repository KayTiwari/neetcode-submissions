class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let map = new Map()
        let value;
        let left = 0;
        for (let right = 0; right < nums.length; right++) {
            if (!map.has(nums[right])) {
                map.set(nums[right], right);
            }
            else if (map.has(nums[right])) {
            let val = Math.abs(map.get(nums[right]) - right)
            console.log(val)
               if (val <= k) {
                return true;
               }
               map.set(nums[right], right)
            }
        }
        return false;
    }
}
