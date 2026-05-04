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
            if (sum === target) break;
            if (sum > target) {
                k--;
            }
            else if (sum < target) {
                i++;
            }
        }
        let final = [i+1,k+1];
        return final;
    }
}
