#CREATING TABLE FOR CUSTOMER AND ORDERS
CREATE DATABASE aimdb;
use aimdb;
## Creating customer table with Primary key in it.
CREATE TABLE customers(c_id INT PRIMARY KEY,c_name VARCHAR(40),c_city CHAR(40));
DESCRIBE customers;

#Inserting record into customers table.
INSERT INTO customers VALUES(1,'sumit','pune'),(2,'amit','solapur'),(3,'rohit','mumbai'),(4,'akshay','kolhapur'),(5,'pavan','nashik')
,(6,'tanmay','satara');
SELECT * FROM customers;


#Creating Orders table with primary key and foriegn key.
CREATE TABLE ORDERS(o_id INT PRIMARY KEY,item_name VARCHAR(40),c_id INT,FOREIGN KEY(c_id) REFERENCES CUSTOMERS(c_id));
DESCRIBE ORDERS;

INSERT INTO ORDERS VALUES(100,'fridge',1),(101,'Samsung_mobile',2),(102,'TV',3),(103,'modem',4),(104,'fan',1)
,(105,'laptop',2);
SELECT * FROM ORDERS;


#----CREATING VIEW and DROP VIEW -----
CREATE VIEW company_orders AS (SELECT * FROM ORDERS);
SELECT * FROM company_orders;
DROP VIEW company_orders;


#--Inner Join
SELECT c.c_name,o.item_name,o.o_id FROM customers c INNER JOIN ORDERS o on c.c_id = o.c_id;

#--Left Join
SELECT c.c_name,o.item_name from customers c LEFT JOIN ORDERS o on c.c_id = o.c_id;

#--Right Join
SELECT c.c_name,o.item_name from customers c RIGHT JOIN ORDERS o on c.c_id = o.c_id;

#--Full join
SELECT c.c_name,o.item_name from customers c LEFT JOIN ORDERS o on c.c_id = o.c_id
UNION
SELECT c.c_name,o.item_name from customers c RIGHT JOIN ORDERS o on c.c_id = o.c_id;


#Creating procedure and doing CREATE , UPDATED , DELETE and INSERT Operation ON PLAYER table using procedure CRUD.
DROP PROCEDURE IF EXISTS CRUD; 
DROP TABLE IF EXISTS PLAYER;
DELIMITER //
	CREATE PROCEDURE CRUD(IN p_name char(50),IN p_id varchar(20) , IN p_age INT)
		BEGIN 
            SET SQL_SAFE_UPDATES = 0;
			CREATE TABLE PLAYER (p_name char(50),p_id varchar(20),p_age int);
			INSERT INTO PLAYER VALUES(p_name,p_id,p_age);
            SELECT * FROM PLAYER;
            UPDATE PLAYER SET p_name='amit' WHERE p_id=p_id;
            #DELETE FROM PLAYER WHERE p_id=p_id;
            SELECT * FROM PLAYER;
            DROP TABLE PLAYER;
        END //
    DELIMITER ;   
    
#Calling Procedure CRUD to perfom create,insert,update,delete.   
CALL CRUD('Sumit',10,30);    


#Functions Creation and calling.
#Creating FUnction

DROP FUNCTION IF EXISTS OrderCheck;
DELIMITER $$  
CREATE FUNCTION OrderCheck(  
    custID int  
)   
RETURNS VARCHAR(20)  
DETERMINISTIC  
BEGIN  
    DECLARE custumer_type VARCHAR(20);  
    IF custID > 3 THEN  
        SET custumer_type = 'Platinum';  
    ELSEIF (custID <3 AND   
            custID >= 2) THEN  
        SET custumer_type = 'GOLD';  
    ELSEIF custID <= 1 THEN  
        SET custumer_type = 'Silver';  
    END IF;  
    RETURN (custumer_type);  
END$$  
DELIMITER ;  

#checking the function is created properly or not.
SHOW FUNCTION STATUS WHERE db = 'aimdb';

#Setting value to the variable
SET @c_id=2; 

DESC ORDERS;
SELECT item_name, o_id, OrderCheck(c_id) FROM ORDERS ORDER BY c_id;  

#HI Jeel, As you suggested , tried all the operations which covered in todays session. 
#Please let me know if any improvement required or feedback.


