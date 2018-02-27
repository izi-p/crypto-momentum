export const toNumber = price => Number(price.substring(1));

export const getPerformance = (newPrice, oldPrice) => {
  if (!oldPrice) {
    return null;
  }

  return (newPrice - oldPrice) / oldPrice;
}

export const comparePerformances = (a, b) => {
  if (a.performance > b.performance) return -1;
  if (a.performance < b.performance) return 1;
  return 0;
}

export const getKey = coin => `${coin.name}_${coin.symbol}`
