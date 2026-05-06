class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(str, k) {
        let map = new Map();
        let longest = 0
        let left = 0
        for (let right = 0; right < str.length; right++) {
            map.set(str[right], (map.get(str[right]) || 0) + 1)
            console.log(map)

            //frequency of most used char in current window
            let frequency = [...map.entries()].reduce((a,b) => a[1] > b[1] ? a : b)[1]
            let most = [...map.entries()].reduce((a,b) => a[1] > b[1] ? a : b)[0]

            let currentwindow = right - left + 1
            //if currentwindow - frequency > k
            if (currentwindow - frequency > k) {
                map.set(str[left], map.get(str[left]) - 1)
                left++;
                currentwindow = right - left + 1
            }
            console.log(longest, currentwindow)
            longest = Math.max(longest, currentwindow);
        }
        return longest
    }
}

//get counts per character
//assign replacement value, most used chars? or which replaments will yield longest substring, so maybe try all??

