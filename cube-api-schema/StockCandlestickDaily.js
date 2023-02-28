cube(`StockCandlestickDaily`, {
  sql: `SELECT * FROM public.stock_candlestick_daily`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    symbol: {
      sql: `symbol`,
      type: `string`
    },
    
    day: {
      sql: `day`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
