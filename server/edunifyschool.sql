-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 03:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edunifyschool`
--

-- --------------------------------------------------------

--
-- Table structure for table `schools`
--

CREATE TABLE `schools` (
  `id` int(30) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `contact` int(20) NOT NULL,
  `image` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schools`
--

INSERT INTO `schools` (`id`, `name`, `address`, `city`, `state`, `contact`, `image`, `email_id`) VALUES
(11, 'La Martiniere College', 'La Martiniere College Road, Hazratganj', 'Lucknow', 'UP', 1234567891, 'best_british_boarding_schools_monmouth_outside-942.jpg', 'nike@12gmail.com'),
(12, 'Chirec International School', ' 1-55/12, Botanical Garden Rd, Sri Ram Nagar, Kondapur, Hyderabad, Telangana 500084', 'Kondapur', 'Telangana ', 1234567898, 'R.png', 'hansaskillz@gmail.com'),
(13, 'Bharatiya Vidya Bhavan', 'Jubilee Hills, Hyderabad, Telangana ', 'Kondapur', 'Telangana ', 1234567898, 'bigstock-Modern-American-High-School-5979057.jpg', 'hansaskillz@gmail.com'),
(14, 'St. Mark’s Girls Senior Secondary School ', 'Block A, Meera Bagh, Paschim Vihar, New Delhi, Delhi 110087', 'Delhi', 'Delhi', 2147483647, 'OIP (1).jpg', 'dmsharma601@gmail.com'),
(15, 'Ahlcon International School', ' Mayur Vihar, Phase-1, Opp Una Enclave, Near Delhi Police Apartment, New Delhi,110091', 'New Delhi', 'New Delhi', 2147483647, 'R.jpg', 'hansaskillz@gmail.com'),
(16, 'CP Goenka School', 'Nagar Highway Road, behind Mapple Hotel, Wagholi', 'Ubale Nagar', 'Pune', 987654321, 'rev1-e1478803667647.jpg', 'dmsharma601@gmail.com'),
(17, 'Abhinav School', '15, 47, Law College Rd, Apex Colony, Erandwane, 48/1, Pune', 'Pune', 'Pune', 2147483647, 'OIP.jpg', 'sharmatripti26@gmail.com'),
(18, 'Princeton School', '	New Shimla, Sector 5 Phase III, Shimla', 'Shimla', 'Shimla', 2147483647, '06å»ºç­å¤è§facade.jpg', 'hansaskillz@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
