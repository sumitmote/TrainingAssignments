use aimdb;
CREATE TABLE employee(emp_id int , emp_name varchar(20), emp_salary numeric ,emp_city char(40)); 

INSERT INTO employee VALUES(1,'sumit',10000,'pune'),(2,'amit',20000,'solapur'),(3,'vinay',30000,'nashik'),(4,'jeel',40000,'ahemdabad'),(5,'pramila',50000,'pune'),(6,'mohit',50000.43,'pune'),(7,'vinit',5000.43,'mumbai'),(8,'mohit',7000.43,'kolhapur');

SELECT * FROM employee

#AVG()
SELECT avg(emp_salary) from employee;

#COUNT()
SELECT COUNT(DISTINCT emp_salary) FROM employee;

#FIRST()
SELECT FIRST(emp_salary) FROM employee;
#LAST()
SELECT LAST(emp_salary) FROM employee;

#MAX()
SELECT MAX(emp_salary) FROM employee;

#MIN()
SELECT MIN(emp_salary) FROM employee;

#SUM()
SELECT SUM(emp_salary) from employee;

#UCASE()
SELECT UCASE(emp_name) FROM employee;

#LCASE()
SELECT LCASE(emp_name) FROM employee;

#MID()
SELECT MID(emp_name, 1, 4) from employee;

#ROUND()
SELECT ROUND(emp_salary) from employee;

#NOW()
SELECT NOW();

#SUB Quieries####.
show tables;
select * from customers;

SELECT * FROM customers where customers.c_city in (Select customers.c_city from customers where customers.c_city not in('mumbai','satara'));
SELECT * FROM customers where customers.c_city in (Select customers.c_city from customers where customers.c_city  in('mumbai','satara'));



#Concat
SELECT CONCAT('Sumit' , 'Mote') as  'FULLNAME';

#INSTR  
SELECT INSTR('Peneselvnia' , 's')

#LENGTH
SELECT LENGTH('SumitBalasahebMote')

SELECT RTRIM('SUMIT    ')

SELECT LTRIM('  MOTE    ')

SELECT REPLACE('SUMIT' , 'I' , 'EE')

SELECT REVERSE('MADAM')

SELECT SUBSTR('HELLOWOLD' , 2,3)

SELECT LOWER('HELLO')


SELECT UPPER('hello')

SELECT DAYOFMONTH('2015-08-30')

