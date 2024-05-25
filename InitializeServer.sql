--create database passivePlanning creating database cannot be executed on transaction block... I Should fix it later.
create table Tasks(
	ID serial,
	Name text,
	generatedTime time with time zone,
	primary key (ID)
)
