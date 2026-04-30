class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let wordmatch = new Map();
        let arr = [];
        for (let s = 0; s < strs.length; s++){
            let newstring = strs[s].split('').sort().join('');
            if (wordmatch.has(newstring)){
                wordmatch.get(newstring).push(strs[s])
            }
            else {
                wordmatch.set(newstring, [strs[s]])
            }
        }
        return Array.from(wordmatch.values());
    }
}

// find frequency of character in string
// map2 is to find frequency of all characters in string before setting it in map
// see if map2[s] exists on map1

// could add all new sets to map, go string by string if it matches push,
// if it's doesn't set
