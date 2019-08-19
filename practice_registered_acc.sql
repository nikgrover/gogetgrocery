-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: practice
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `registered_acc`
--

DROP TABLE IF EXISTS `registered_acc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registered_acc` (
  `name` char(20) DEFAULT NULL,
  `phone_no` varchar(10) DEFAULT NULL,
  `address` varchar(225) DEFAULT NULL,
  `postal_code` varchar(6) DEFAULT NULL,
  `email_id` varchar(225) DEFAULT NULL,
  UNIQUE KEY `phone_no` (`phone_no`),
  UNIQUE KEY `email_id` (`email_id`),
  CONSTRAINT `registered_acc_ibfk_1` FOREIGN KEY (`email_id`) REFERENCES `login` (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_acc`
--

LOCK TABLES `registered_acc` WRITE;
/*!40000 ALTER TABLE `registered_acc` DISABLE KEYS */;
INSERT INTO `registered_acc` VALUES ('nikhil grover','4381192931','8769 av. quebec ,montreal','H3N2C1','CEGEP@gmail.com'),('nik grover','4281192331','8712 av. lasalle ,montreal','H3F2C0','CEGEP1@gmail.com'),('sanjay goud','5141192331','9712 av. sherbooke ,montreal','H1F2N0','CEGEP2@gmail.com'),('sajan goud','5141192332','11712 av. sherbooke ,montreal','H1F2N1','CEGEP3@gmail.com'),('vinod saini','5142192332','10712 av. sherbooke ,montreal','H1F1N1','CEGEP4@gmail.com'),('Sahil saini','5142192222','712 av. sherbooke ,montreal','H1F171','CEGEP5@gmail.com');
/*!40000 ALTER TABLE `registered_acc` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-18 14:37:10
