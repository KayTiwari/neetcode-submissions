class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        let final = []
        for (let i in nums) {
            if (map.has(target - nums[i])){
                final.push(Number(map.get(target - nums[i])))
                final.push(Number(i))
            }
            else map.set(nums[i], i)
        }
        return final
    }
}
