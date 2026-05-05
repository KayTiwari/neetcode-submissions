class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.sort((a,b) => a - b);
        let final = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && n[i] === n[i - 1]) continue;
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = n[i] + n[left] + n[right];

                if (sum === 0) {
                    final.push([n[i], n[left], n[right]])
                    while (left < right && n[left] === n[left + 1]) left++;
                    while (left < right && n[right] === n[right - 1]) right--;
                    left++;
                    right--;
                }
                else if (sum < 0) {
                    left++;
                }
                else {
                    right--;
                }
                // console.log(final)
            }
        }
        return final
    }
}
