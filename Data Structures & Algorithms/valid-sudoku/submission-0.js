class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let boxes = Array.from({ length: 9 }, () => new Set());
        for (let r = 0; r < 9; r++) {
        let rowset = new Set();
        let colset = new Set();
            for (let c = 0; c < 9; c++) {
                let val = board[r][c];
                if (rowset.has(val) && val !== '.') return false;
                rowset.add(val);

                let colval = board[c][r];
                if (colset.has(colval) && colval !== '.') return false;
                colset.add(colval)

                let boxindex = Math.floor(r/3) * 3 + Math.floor(c/3);
                if (boxes[boxindex].has(val) && val !== '.') return false;
                boxes[boxindex].add(val)
            }
        }
        return true;
    }
}

//check for row duplicates excluding '.'
// check for column duplicates excluding '.'
// for 3x3: combinations up to [i+2][j+2]