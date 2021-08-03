/*
Aggregate functions:
These functions are used to do operations from the values of the column and a single value is returned.
AVG()
COUNT()
FIRST()
LAST()
MAX()
MIN()
SUM()
Scalar functions:
These functions are based on user input, these too returns single value.
UCASE()
LCASE()
MID()
LEN()
ROUND()
NOW()
FORMAT()
*/

CREATE TABLE employee(emp_id int , emp_name varchar(20), emp_salary numeric ,emp_city char(40)); 

INSERT INTO employee VALUES(1,'sumit',10000,'pune'),(2,'amit',20000,'solapur'),(3,'vinay',30000,'nashik'),(4,'jeel',40000,'ahemdabad'),(5,'pramila',50000,'pune');

SELECT * FROM employee

--avg()
SELECT AVG(emp_id) from employee;

--COUNT()
SELECT COUNT(emp_id) from employee;

--MAX()
SELECT MAX(emp_salary) from employee

--MIN()
SELECT MIN(emp_salary) from employee

--SUM()
SELECT SUM(emp_id) from employee


--UPPER 
SELECT UPPER(emp_name) from employee

--LOWER()
SELECT LOWER(emp_name) from employee

--LEN()
SELECT LEN(emp_name) from employee

INSERT INTO employee VALUES(6,'mohit',50000.43,'pune'),(7,'vinit',5000.43,'mumbai'),(8,'mohit',7000.43,'kolhapur')
--ROUND()
SELECT ROUND(emp_salary,emp_id) from employee

--getdate()
SELECT emp_id, getdate() as 'Current_Date' from employee
SELECT emp_id, getutcdate() as 'Current_Date' from employee

--FORMAT()
DECLARE @date DATE = GETDATE();  
SELECT FORMAT( @date, 'dd/MM/yyyy', 'en-UK' ) AS 'Date'  
       ,FORMAT(123456789012,'##-##########') AS 'Mobile Number';



CREATE FUNCTION discounts(
    @quantity INT,
    @list_price DEC(10,2),
    @discount DEC(4,2)
)
RETURNS DEC(10,2)
AS 
BEGIN
    RETURN @quantity * @list_price * (1 - @discount);
END


--Sub Queries
use test;
select * from  [dbo].[Employees]
Insert into [dbo].[Employees] values (2,'amit','nashik'),(5,'rohit','kolhapur');
select * from employees
select * from Projects
Insert into [dbo].[Projects] values (13,'c#',3,'pramila'),(14,'liferay',4,'jeel');

--sub-qurury example
SELECT DISTINCT(Employees.empname) from Employees,Projects where Employees.empid IN (Select Projects.empid from Projects)

