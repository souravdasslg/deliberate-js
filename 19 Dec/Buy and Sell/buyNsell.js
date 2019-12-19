const maxProfit = function (prices) {
  let profit = 0;
  prices.forEach((buyPrice, buyPriceIndex) => {
    prices.forEach((sellPrice, sellPriceIndex) => {
      if ((buyPrice < sellPrice) && (buyPriceIndex < sellPriceIndex)) {
        const tempProfit = sellPrice - buyPrice;
        profit = tempProfit > profit ? tempProfit : profit;
      }
    });
  });
  return profit;
};
export {
  maxProfit,
};
