--create database passivePlanning creating database cannot be executed on transaction block... I Should fix it later.
create table Tasks(
	ID serial,
	Name text,
	generatedTime timestamp with time zone,
	primary key (ID)
);