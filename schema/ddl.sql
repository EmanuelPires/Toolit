Drop DATABASE toolit;
create database toolit;
use toolit;

DROP TABLE IF EXISTS `customer`;
create table customer (
`CustomerID` int
(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar
(255) DEFAULT NULL,
`OKTA_ID` varchar(1000) NOT NULL,
  `Email` varchar
(400) DEFAULT NULL,
  `Password` varchar
(200) DEFAULT NULL,
  `Phone` varchar
(255) DEFAULT NULL,
  `Street` varchar
(255) DEFAULT NULL,
  `City` varchar
(255) DEFAULT NULL,
  `State` varchar
(255) DEFAULT NULL,
  `Country` varchar
(255) DEFAULT NULL,
  `Zipcode` int
(11) DEFAULT NULL,
  `PlaceID` varchar
(1000) DEFAULT NULL,
  PRIMARY KEY
(`CustomerID`)
) ;

DROP TABLE IF EXISTS `product_category`;
CREATE TABLE `product_category`
(
  `ProductCategoryID` int
(11) NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar
(100) NOT NULL,
  PRIMARY KEY
(`ProductCategoryID`)
);

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`
(
  `ProductID` int
(11) NOT NULL AUTO_INCREMENT,
  `Product_Name` varchar
(255) DEFAULT NULL,
  `UnitPrice` float DEFAULT NULL,
  `Stock` int
(11) DEFAULT NULL,
  `Availability` int
(11) DEFAULT NULL,
  `Image` varchar
(255) DEFAULT NULL,
  `Click` int
(11) DEFAULT NULL,
  `ProductPlaceID` varchar
(1000) DEFAULT NULL,
  `SupplierID` int
(11) NOT NULL,
  `FK_CategoryID` int
(11) NOT NULL,
  PRIMARY KEY
(`ProductID`),
  KEY `SupplierID`
(`SupplierID`),
  KEY `FK_CategoryID`
(`FK_CategoryID`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY
(`SupplierID`) REFERENCES `customer`
(`CustomerID`) ON
UPDATE CASCADE,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY
(`FK_CategoryID`) REFERENCES `product_category`
(`ProductCategoryID`) ON
UPDATE CASCADE
)
;

DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`
(
  `OrderID` int
(11) NOT NULL AUTO_INCREMENT,
  `OrderDate` datetime DEFAULT NULL,
  `OrderCost` decimal
(10,0) DEFAULT NULL,
  `Quantity` int
(11) DEFAULT NULL,
  `FK_CustomerID` int
(11) NOT NULL,
  `FK_ProductID` int
(11) NOT NULL,
  PRIMARY KEY
(`OrderID`),
  KEY `FK_CustomerID`
(`FK_CustomerID`),
  KEY `FK_ProductID`
(`FK_ProductID`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY
(`FK_CustomerID`) REFERENCES `customer`
(`CustomerID`) ON
DELETE CASCADE ON
UPDATE CASCADE,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY
(`FK_ProductID`) REFERENCES `product`
(`ProductID`) ON
UPDATE CASCADE
) ;

