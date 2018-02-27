import dataJson from './coinMarketCapData.json';
import { comparePerformances, getKey, getPerformance, toNumber } from './backtestUtils.js';

const dataList = dataJson['historical-snapshots'];

let previousPrices = new Map();

dataList.forEach(dataT => {
  let weekPerformances = [];
  let weekPrices = new Map();

  // fill in previous prices
  dataT.currencies.forEach(coin => {
    const previousPrice = previousPrices.get(getKey(coin));

    if (previousPrice) {
      weekPerformances.push({
        coin: coin.name,
        ticker: coin.symbol,
        performance: getPerformance(toNumber(coin.price), previousPrice),
      });
    }

    weekPrices.set(getKey(coin), toNumber(coin.price));
  })

  previousPrices = weekPrices;
  const weeklyTopPerformances = weekPerformances.sort(comparePerformances).slice(0, 5);

  console.log('week :', dataT.date, '\n', 'weekPerfs: ', weeklyTopPerformances, '\n');
  // getPerformance if possible
})
