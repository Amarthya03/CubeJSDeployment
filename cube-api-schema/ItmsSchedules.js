cube(`ItmsSchedules`, {
	sql: `SELECT * FROM public.itms_schedules`,

	preAggregations: {
		// Pre-Aggregations definitions go here
		// Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
	},

	joins: {
		Itms: {
			sql: `${ItmsSchedules}.trip_id = ${Itms}.trip_id`,
			relationship: `belongsTo`,
		},
	},

	measures: {
		count: {
			type: `count`,
			drillMembers: [id, observationdatetime],
		},
	},

	dimensions: {
		id: {
			sql: `id`,
			type: `string`,
		},
		tripId: {
			sql: `trip_id`,
			type: `string`,
			primaryKey: true,
		},
		arrivalTime: {
			sql: `arrival_time`,
			type: `time`,
		},

		observationdatetime: {
			sql: `observationdatetime`,
			type: `time`,
		},

		departureTime: {
			sql: `departure_time`,
			type: `time`,
		},
	},

	dataSource: `default`,
});
