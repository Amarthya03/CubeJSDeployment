cube(`StocksRealTime`, {
	sql: `SELECT * FROM public.stocks_real_time`,
	preAggregations: {
		// Pre-Aggregations definitions go here
		// Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
	},
	joins: {},
	measures: {
		count: {
			type: `count`,
			drillMembers: [],
		},
		price: {
			sql: `price`,
			type: `sum`,
		},
	},
	dimensions: {
		symbol: {
			sql: `symbol`,
			type: `string`,
		},
		time: {
			sql: `time`,
			type: `time`,
		},
	},
	dataSource: `default`,
});
