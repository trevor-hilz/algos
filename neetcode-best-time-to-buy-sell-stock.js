class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let highest = 0;
        for(let i = 0; i < prices.length - 1; i++) {
            for(let j  = i + 1; j < prices.length; j++) {
                highest = Math.max(highest, prices[j] - prices[i])
            }
        }
        return highest;
    }
}

const t = new Solution();
console.log(t.maxProfit([1, 3, 7, 4, 3, 10, 8, 1]));