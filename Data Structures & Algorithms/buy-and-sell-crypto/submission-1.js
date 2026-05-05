class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currentlow = -1;
        let profit = 0;
        for (let p of prices) {
            if (currentlow === -1 || currentlow > p) {
                currentlow = p; continue;
            }
            let possibleprofit = p - currentlow;
            if (possibleprofit > profit) {
                profit = possibleprofit;
            }
        }
        return profit;
    }
}
