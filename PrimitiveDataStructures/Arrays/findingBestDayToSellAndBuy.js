/*
  Prompt:
    Given an array for which the ith element is the price of a single share of a given stock on day i, find the maximum possible profit if you were to buy and then sell that share in that time range.

  Note:
  1. No going quantum; you cannot sell a share before you buy one.
  2. Assume rampant capitalism, the price of a share cannot be negative.
  3. But not that much capitalism: you are only allowed to perform a single transaction, meaning you can only buy once and sell once.
  3. The examples below use whole numbers, but your algorithm should also work with decimals. This shouldn't change anything.

  Examples:

  1.) Input: [7,1,5,3,6,4]
      Output: 5

  There are six days in this analysis, where the price is $7 on Day 1, $1 on Day 2, and so on, 6 days in total. This is akin to saying "Computer, over this n-day period (where n is the length of the array), what is the best play I should make for stock $XYZ?" The correct return value is $5.

  (You should buy on Day 2 when the price is 1, and then sell on Day 5, when the price is 6, for a profit of 6 - 1 = 5. Note that time-travel is not allowed in the testing chamber,so you cannot do 7 - 1 = 6.)

  2.) Input: [7,6,4,3,1]
      Output: 0

  (No transactions are done, as the maximum profit this week is 0. No negative profits; sorry, we do not reward failure.)

  Meta:
  1. [EASY] Completing this question successfully indicates that you somewhat understand arrays. At "decent" or "acceptable" performance, you should be able to problems with similar difficulty in about an hour, and in O(n) time. This question is currently ranked as [EASY].

  2. [MEDIUM] For moderate / firm mastery, try this problem again, but this time, you are allowed multiple transactions. Do as many buy and sell transactions as you like to maximize the total profit.

  3. [HARD] For strong mastery, try this problem again, but this time, you are a young and aspiring swing trader who wants to use code to take the thinking out of their stock market side gig. Because the U.S. day-trading taxes threshold triggers when you trade three (3) times under the same ticker every day, write an algorithm that can intelligently maximize profit using up to two (2) transactions. (So either no transactions, one or two. Three is not allowed.)
*/

'use strict'

const getMaxProfitEasy = function(prices) {
  //Input: array of prices
  //Output: maximum profit that can be achieved
  let currentProfit = 0;
  let buyIn;
  let sell;

  //Compare both arrays
  for (let i = 0; i < prices.length; i++) {
    for (let x = 0; x < prices.length; x++) {
      let profitMargin = prices[i] - prices[x];

      if (profitMargin < currentProfit) {
        currentProfit = profitMargin;
        buyIn = prices[i];
        sell = prices[x];
      }

    }
  }

  return "Best buy in price: " + buyIn + ". Best selling price: " + sell + ". Profit margin: " + currentProfit*-1 + "."
}

console.log(getMaxProfitEasy([1, 3, 2, 5, 8]))