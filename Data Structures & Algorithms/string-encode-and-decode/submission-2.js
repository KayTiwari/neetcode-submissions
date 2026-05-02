class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newstr = '';
        for (let string of strs) {
            newstr += ']]' + string.length + '#' + string;
        }
        return newstr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
        let k = 0;
        let length = '';
        //length will always be first - move on
        while (k < str.length) {
            //find length
            if (str[k] === ']' && str[k+1] === ']') {
                k += 2;
                while (str[k] !== '#') {
                    length += str[k];
                    k++;
                }
                k++;
            }
            // get word
            let wordbuilder = '';
            let end = k + Number(length);
            while (k < end) {
                console.log(k, end)
                wordbuilder += str[k];
                k++;
            }
            length = '';
            arr.push(wordbuilder);
        }
        return arr;
    }
}
