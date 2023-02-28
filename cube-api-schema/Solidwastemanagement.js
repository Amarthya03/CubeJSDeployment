cube(`Solidwastemanagement`, {
	sql: `SELECT * FROM public.solidwastemanagement`,
	preAggregations: {
		// Pre-Aggregations definitions go here
		// Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
	},
	joins: {},
	measures: {
		count: {
			type: `count`,
			drillMembers: [observationdatetime],
		},
	},
	dimensions: {
		devicebatterystatus: {
			sql: `devicebatterystatus`,
			type: `string`,
		},
		vehiclerunningstatus: {
			sql: `vehiclerunningstatus`,
			type: `string`,
		},
		ignitionstatus: {
			sql: `ignitionstatus`,
			type: `string`,
		},
		vehicletype: {
			sql: `vehicletype`,
			type: `string`,
		},
		observationdatetime: {
			sql: `observationdatetime`,
			type: `time`,
		},
	},
	dataSource: `default`,
});
