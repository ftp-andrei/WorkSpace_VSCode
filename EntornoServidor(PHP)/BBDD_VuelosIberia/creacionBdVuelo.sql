use iberia;
go
create table vuelo
(
	codigo char(5) not null,
	origen varchar(100) not null,
	destino varchar(100) not null,
	salida time not null,
	duracion time not null,
	constraint Pkvuelo primary key(codigo),
);

create table vuelos(
	codigo char(5) not null,
	fecha date not null,
	plazas smallint not null default 120,
	libres smallint not null default 120,
	fila1 tinyint not null default 0,
	fila2 tinyint not null default 0,
	fila3 tinyint not null default 0,
	fila4 tinyint not null default 0,
	fila5 tinyint not null default 0,
	fila6 tinyint not null default 0,
	fila7 tinyint not null default 0,
	fila8 tinyint not null default 0,
	fila9 tinyint not null default 0,
	fila10 tinyint not null default 0,
	fila11 tinyint not null default 0,
	fila12 tinyint not null default 0,
	fila13 tinyint not null default 0,
	fila14 tinyint not null default 0,
	fila15 tinyint not null default 0,
	fila16 tinyint not null default 0,
	fila17 tinyint not null default 0,
	fila18 tinyint not null default 0,
	fila19 tinyint not null default 0,
	fila20 tinyint not null default 0,
	constraint pkvuelos primary key (codigo,fecha),
	constraint fkvueloNVuelos foreign key (codigo) references vuelo(codigo),

)