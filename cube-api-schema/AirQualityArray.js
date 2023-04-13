cube(`AirQualityArray`, {
	sql: `SELECT airqualitylevel FROM public.air_quality`,

	dimensions: {
		airqualitylevel: {
			sql: `airqualitylevel`,
			type: `string`,
		},
	},
});
