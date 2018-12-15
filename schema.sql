create database reservation_DB;

use reservation_DB;

create table reservations (
	unique_id integer(50) auto_increment not null,
	primary key (unique_id),
	name varchar(50) not null,
	email varchar(50) not null,
	phone integer(50) not null
);

select * from reservations