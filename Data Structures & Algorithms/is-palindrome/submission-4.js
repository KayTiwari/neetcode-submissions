class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s1) {
        const s = s1.replace(/[^a-z0-9]/gi, '');
        if (s.length > 1) {
        let i = 0
        let k = s.length - 1
        while (i < s.length && k > -1) {
            if (!(s[i].toUpperCase().trim() === s[k].toUpperCase().trim())) return false;
            i++;
            k--;
        }
        }
        console.log('hi')
        return true;
    }
}
