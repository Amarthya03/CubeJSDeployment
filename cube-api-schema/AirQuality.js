cube(`AirQuality`, {
	sql: `SELECT * FROM public.air_quality`,
	preAggregations: {
		// Pre-Aggregations definitions go here
		// Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
		aqiMajorPollutant: {
			measures: [AirQuality.count],
			dimensions: [AirQuality.aqimajorpollutant],
			timeDimension: AirQuality.observationdatetime,
			granularity: `day`,
		},
		airQualityLevel: {
			measures: [AirQuality.count],
			dimensions: [AirQuality.airqualitylevel],
			timeDimension: AirQuality.observationdatetime,
			granularity: `day`,
		},
	},
	joins: {},
	measures: {
		count: {
			type: `count`,
			drillMembers: [observationdatetime],
		},
	},
	dimensions: {
		airqualitylevel: {
			sql: `airqualitylevel`,
			type: `string`,
		},
		devicestatus: {
			sql: `devicestatus`,
			type: `string`,
		},
		aqimajorpollutant: {
			sql: `aqimajorpollutant`,
			type: `string`,
		},
		observationdatetime: {
			sql: `observationdatetime`,
			type: `time`,
		},
	},
	dataSource: `default`,
});
