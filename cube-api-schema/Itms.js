cube(`Itms`, {
	sql: `SELECT * FROM public.itms`,
	preAggregations: {
		// Pre-Aggregations definitions go here
		// Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started

		licensePlateRollup: {
			measures: [Itms.vehicleSpeed],
			dimensions: [Itms.licensePlate],
			timeDimension: Itms.observationdatetime,
			granularity: `hour`,
		},
	},
	joins: {},
	measures: {
		count: {
			type: `count`,
			drillMembers: [routeId, id, observationdatetime],
		},
		vehicleSpeed: {
			sql: `speed`,
			type: `sum`,
		},
	},
	dimensions: {
		speed: {
			sql: `speed`,
			type: `string`,
		},
		routeId: {
			sql: `route_id`,
			type: `string`,
		},
		licensePlate: {
			sql: `license_plate`,
			type: `string`,
		},
		vehicleLabel: {
			sql: `vehicle_label`,
			type: `string`,
		},
		tripDirection: {
			sql: `trip_direction`,
			type: `string`,
		},
		locationType: {
			sql: `${CUBE}."location.type"`,
			type: `string`,
			title: `Location.type`,
		},
		tripId: {
			sql: `trip_id`,
			type: `string`,
			primaryKey: true,
		},
		id: {
			sql: `id`,
			type: `string`,
		},
		observationdatetime: {
			sql: `observationdatetime`,
			type: `time`,
		},
		actualTripStartTime: {
			sql: `actual_trip_start_time`,
			type: `time`,
		},
		lastStopArrivalTime: {
			sql: `last_stop_arrival_time`,
			type: `time`,
		},
		arrivalTime: {
			sql: `${ItmsSchedules.arrivalTime}`,
			type: `time`,
		},
		departureTime: {
			sql: `${ItmsSchedules.departureTime}`,
			type: `time`,
		},
	},
	dataSource: `default`,
});
