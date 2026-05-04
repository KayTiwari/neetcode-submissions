class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let k = numbers.length - 1;
        while (i < k) {
            console.log(i, k)
            let sum = numbers[k] + numbers[i];
            if (sum === target) return [i+1,k+1];
            if (sum > target) {
                k--;
            }
            else if (sum < target) {
                i++;
            }
        }
    }
}
