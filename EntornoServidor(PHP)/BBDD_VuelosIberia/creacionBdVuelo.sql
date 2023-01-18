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
