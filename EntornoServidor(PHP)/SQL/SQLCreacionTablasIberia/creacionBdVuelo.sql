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

INSERT INTO vuelo(codigo,origen,destino,salida,duracion) VALUES
('AK127','Madrid','Londres','00:25','02:35'),
('AM250','Madrid','Berlin','01:10','03:05'),
('AL300','Madrid','Praga','08:00','02:55'),
('AQ350','Madrid','Roma','08:30','02:30'),
('AB205','Madrid','Lisboa','11:15','03:00'),
('AD750','Madrid','Viena','12:25','02:00'),
('AF425','Madrid','Paris','13:35','01:20'),
('AK128','Londres','Madrid','01:55','02:20'),
('AM251','Berlin','Madrid','03:30','03:00'),
('AL301','Praga','Madrid','06:45','02:55'),
('AQ351','Roma','Madrid','10:25','02:30'),
('AF426','Lisboa','Madrid','15:06','01:25'),
('AB206','Viena','Madrid','18:55','03:00'),
('AD751','Paris','Madrid','13:55','02:05');

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
);

create table usuario(
	idUsers INT IDENTITY NOT NULL,
	usuario VARCHAR(30) NOT NULL,
	pwd VARCHAR(255) NOT NULL,
	rol VARCHAR(50) NOT NULL DEFAULT 'cliente',
	CONSTRAINT pkusers PRIMARY KEY (idUsers),
	CONSTRAINT uusuarioUser UNIQUE (usuario),
);