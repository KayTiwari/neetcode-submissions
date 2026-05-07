class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map()
        let map2 = new Map()

        let length = s.length > t.length ? s.length : t.length;
        for (let i = 0; i < length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1)
            map2.set(t[i], (map2.get(t[i]) || 0) + 1)
        }

        let arr1 = Array.from(map).sort()
        let arr2 = Array.from(map2).sort()
        console.log(arr1, arr2)
        return JSON.stringify(arr1) === JSON.stringify(arr2)
    }
}
