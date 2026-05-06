class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {
        let map = new Map();
        let longest = 0;
        let left = 0;
        for (let s = 0; s < str.length; s++) {
            if (map.has(str[s])) {
                left = Math.max(left, map.get(str[s]) + 1)
            }

            map.set(str[s], s)
            console.log(map, left)

            let currentLength = s - left + 1
            longest = Math.max(longest, currentLength);
        }
        return longest
    }
}
