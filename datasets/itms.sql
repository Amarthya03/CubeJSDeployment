create table itms (
    speed decimal,
    route_id varchar(10),
    trip_direction VARCHAR(10),
    observationDateTime TIMESTAMP,
    license_plate VARCHAR(10),
    trip_delay DOUBLE PRECISION,
    last_stop_id int,
    actual_trip_start_time TIMESTAMP,
    last_stop_arrival_time time,
    vehicle_label varchar(5),
    trip_id int,
    id TEXT,
    "location.type" VARCHAR(10),
    "location.coordinates" POINT
)

create table itms_schedules (
    trip_id PRIMARY KEY,
    arrival_time time,
    stop_sequence int,
    stop_id int,
    id text,
    observationDateTime TIMESTAMP,
    departure_time time
)