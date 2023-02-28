cube(`Users`, {
  sql: `SELECT * FROM public.users`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started

    main: {
      measures: [Users.count],
      dimensions: [Orders.user_name]
    }
  },
  joins: {},
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, username]
    }
  },
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    username: {
      sql: `username`,
      type: `string`
    }
  },
  dataSource: `default`
});