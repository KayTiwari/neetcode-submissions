class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        //compare length by height, and this is the key=> x * y, we always assign the gre
        //edy int as the highest x*y value thus far
        // maybe if heights has a height greater than end - i?
        //a greedy algorithm always goes for the NEXT best solution
        let greedyint = 0;
        let i = 0
        let end = heights.length - 1
        while (i < end) {
            // x always starts at MAX value
            //y can vary
            // only move x if y has potential to be HIGHER
            let x = end - i
            let y = Math.min(heights[end], heights[i])
            let water = x*y
            if (water > greedyint) {
                greedyint = water
            }
            if (heights[end] > heights[i]) {
                i++;
            }
            else end--;
        }
        return greedyint
    }
}
