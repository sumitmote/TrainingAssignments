use aimdb;
CREATE TABLE employe(emp_id varchar(20) primary key ,emp_name varchar(20), emp_salary int);
CREATE TABLE project(pr_id varchar(20) primary key, emp_id varchar(20),pr_name varchar(20));
describe employe;
explain project;
select user();
GRANT ALL PRIVILEGES ON aimdb.* TO 'root'@'localhost';
select * from project
drop table project;
show tables;
explain project;
CREATE TABLE project(pr_id varchar(20) primary key, emp_id varchar(20),pr_name varchar(20),foreign key(emp_id) references employe(emp_id) on delete cascade);

select * from employe;
Insert into employe values(1,'sumit',30000),(2,'amit',40000),(3,'jeel',50000),(4,'sandesh',60000);
select * from project;
explain project
Insert into project values(101,1,'c'),(102,1,'c++'),(103,2,'java'),(104,2,'liferay');

update employe set emp_name='ARUN' where emp_id=1;
select * from employe;

delete from employe where emp_id=1;
select * from project


