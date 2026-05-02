class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let k = 0; k < nums.length; k++) {
                if (k !== i) {
                    product = product * nums[k];
                }
            }
            arr.push(product);
        }
        return arr;
    }
}
