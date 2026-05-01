class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let final = [];
        for (let i of nums) {
            if (map.has(i)){
                map.set(i, map.get(i) + 1)
            }
            else {map.set(i, 0)}
        }
        let arr = Array.from(map.entries());
        arr.sort((a, b) => b[1] - a[1])
        console.log(arr)
        for (let j = 0; j < k; j++) {
            final.push(Number(arr[j][0]));
        }
    return final
    }
}
