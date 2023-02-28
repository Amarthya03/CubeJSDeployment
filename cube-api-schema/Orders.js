cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,
  preAggregations: {// Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started

    main: {
      measures: [Orders.count],
      dimensions: [Orders.city]
    }
  },
  joins: {
    Users: {
      relationship: `belongsTo`,
      sql: `${CUBE}.user_id = ${Users}.id`
    }
  },
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, city]
    }
  },
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    city: {
      sql: `city`,
      type: `string`
    },
    user_name: {
      sql: `${Users.username}`,
      type: `string`
    }
  },
  dataSource: `default`
});