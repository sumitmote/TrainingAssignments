--CREATING TABLE FOR CUSTOMER AND ORDERS
CREATE DATABASE aimdb;
USE aimdb;

--Creating customer table with Primary key in it.
CREATE TABLE customer(c_id INT PRIMARY KEY,c_name VARCHAR(40),c_city CHAR(40));
SELECT * FROM customer;

--Inserting record into customers table.
INSERT INTO customer VALUES(1,'sumit','pune'),(2,'amit','solapur'),(3,'rohit','mumbai'),(4,'akshay','kolhapur'),(5,'pavan','nashik')
,(6,'tanmay','satara');
SELECT * FROM customer;


--Creating Orders table with primary key and foriegn key.
CREATE TABLE ORDERS(o_id INT PRIMARY KEY,item_name VARCHAR(40),c_id INT,FOREIGN KEY(c_id) REFERENCES CUSTOMER(c_id));
INSERT INTO ORDERS VALUES(100,'fridge',1),(101,'Samsung_mobile',2),(102,'TV',3),(103,'modem',4),(104,'fan',1)
,(105,'laptop',2);
SELECT * FROM ORDERS;


----CREATING VIEW and DROP VIEW -----
CREATE VIEW company_orders AS (SELECT * FROM ORDERS);
SELECT * FROM company_orders;
DROP VIEW company_orders;

--Inner Join
SELECT c.c_name,o.item_name,o.o_id FROM customer c INNER JOIN ORDERS o on c.c_id = o.c_id;

--Left Join
SELECT c.c_name,o.item_name from customer c LEFT JOIN ORDERS o on c.c_id = o.c_id;

--Right Join
SELECT c.c_name,o.item_name from customer c RIGHT JOIN ORDERS o on c.c_id = o.c_id;

--Full join
SELECT c.c_name,o.item_name from customer c LEFT JOIN ORDERS o on c.c_id = o.c_id
UNION
SELECT c.c_name,o.item_name from customer c RIGHT JOIN ORDERS o on c.c_id = o.c_id;

-------------------CREATING TABLE PLAYER FOR STORED PROCEDURE TASK AND ALSO CREATING PROCEDURE------------------------  

CREATE TABLE PLAYER (p_name char(50),p_id varchar(20),p_age int);
SELECT * FROM PLAYER;
INSERT INTO PLAYER VALUES('sachin',99,40),('virat',11,30),('sehwag',100,36),('dravid',13,32),('ganguli',09,37)

SELECT TOP 50 [p_name],[p_id],[p_age] FROM [aimdb].[dbo].[PLAYER]




BEGIN
	DROP PROC IF EXISTS crud
END
GO
CREATE PROCEDURE crud
	(
		@p_name char(50)=null,
		@p_id varchar(50)=null,
		@p_age int=0,
		@choice [varchar](20)

	)
AS

	SET NOCOUNT ON;
	SET XACT_ABORT ON;

	IF @choice='insert'
	BEGIN
	INSERT INTO PLAYER
		(
			p_name,p_id,p_age
		)
	VALUES
		(
		@p_name,
		@p_id,
		@p_age

		)
	END

	IF @choice='update'
BEGIN
	UPDATE player SET p_name=@p_name,p_age=@p_age WHERE p_id=@p_id; 
END    

	IF @choice='delete'
BEGIN
	DELETE FROM player WHERE p_id=@p_id; 
END 
GO

--update
EXEC aimdb.dbo.crud @p_name='Sumit',@p_id=99,@p_age=55,@choice='update'
SELECT TOP 50 [p_name],[p_id],[p_age] FROM [aimdb].[dbo].[PLAYER]

--delete
EXEC aimdb.dbo.crud @p_name='Sumit',@p_id=99,@p_age=55,@choice='delete'
SELECT TOP 50 [p_name],[p_id],[p_age] FROM [aimdb].[dbo].[PLAYER]

--Insert
EXEC aimdb.dbo.crud @p_name='Amit',@p_id=19,@p_age=55,@choice='insert'
SELECT TOP 50 [p_name],[p_id],[p_age] FROM [aimdb].[dbo].[PLAYER]



---FUNCTION CREATE AND OPERATION OVER FUCNTION---------
SET NOCOUNT ON;
DROP FUNCTION IF EXISTS increase_age_by 

CREATE Function dbo.increase_age_by(@incre INT)
RETURNS INT
AS
BEGIN
DECLARE @newAge INT
SELECT @newAge=p_age+@incre FROM PLAYER
RETURN @newAge
end


-- Calling Function through the sql statement
SELECT *,dbo.increase_age_by(9) as 'PLAYER_NAME' FROM PLAYER

SELECT TOP 50 [p_name],[p_id],[p_age] FROM [aimdb].[dbo].[PLAYER]


---FUNCTION Practice -2 Addtion of two numbers

CREATE Function dbo.additionOfTwo(@num1 as INT,@num2 as INT)
RETURNS int
AS
Begin 
Return(@num1 + @num2)
END

Select dbo.additionOfTwo(10,20) as 'Addition_is'



---FUNCTION Practice -3 Find Your Age through function

CREATE FUNCTION aimdb.CalAge(@myDOB DATE)
RETURNS INT  
AS
BEGIN
DECLARE @myCurrentAge INT

	SET @myCurrentAge = DATEDIFF(YEAR,@myDOB,GETDATE())
RETURN @myCurrentAge
END


SELECT dbo.CalAge('1988-11-19') as Age

