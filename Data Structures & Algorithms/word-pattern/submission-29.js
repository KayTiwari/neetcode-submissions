class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let words = s.split(" ");
        if (pattern.length !== words.length) { return false }
        let map = new Map();
        for (let char=0; char < pattern.length; char++) {
            if (!map.has(pattern[char]) && !Array.from(map.values()).includes(words[char])) {
                map.set(pattern[char], words[char]);
            }
            else if (map.has(pattern[char])) {
                if (map.get(pattern[char]) !== words[char]) return false;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
