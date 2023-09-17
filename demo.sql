-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 17, 2023 at 09:03 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `stateid` int(10) UNSIGNED NOT NULL,
  `citiesid` int(10) UNSIGNED NOT NULL,
  `citiesname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`stateid`, `citiesid`, `citiesname`) VALUES
(1, 1, 'Visakhapatnam'),
(1, 2, 'Vijayawada'),
(1, 3, 'Guntur'),
(1, 4, 'Nellore'),
(1, 5, 'Tirupati'),
(2, 6, 'Tawang'),
(2, 7, 'Bhismaknagar'),
(2, 8, 'Pasighat'),
(2, 9, 'Ziro'),
(2, 10, 'Bomdila'),
(3, 11, 'Guwahati'),
(3, 12, 'Tezpur'),
(3, 13, 'Dibrugarh'),
(3, 14, 'Silchar'),
(3, 15, 'North Lakhimpur'),
(4, 16, 'Gaya'),
(4, 17, 'Biharsharif'),
(4, 18, 'Darbhanga'),
(4, 19, 'Bhagalpur'),
(5, 20, 'Bilaspur'),
(5, 21, 'Korba'),
(5, 22, 'Durg-Bhilainagar'),
(5, 23, 'Raigarh'),
(5, 24, 'Rajnandgaon'),
(6, 25, 'Vasco-da-Gama'),
(6, 26, 'Ponda'),
(6, 27, 'Margao'),
(6, 28, 'Mapusa'),
(6, 29, 'Goa Velha'),
(7, 30, 'Ahmedabad'),
(7, 31, 'Surat'),
(7, 32, 'Rajkot'),
(7, 33, 'Junagadh'),
(7, 34, 'Vadodara'),
(8, 35, 'Faridabad'),
(8, 36, 'Gurgaon'),
(8, 37, 'Sonipat'),
(8, 38, 'Panipat'),
(8, 39, 'Ambala'),
(9, 40, 'Dharamshala'),
(9, 41, 'Mandi'),
(9, 42, 'Solan'),
(9, 43, 'Bilaspur'),
(9, 44, 'Chamba'),
(10, 45, 'Bokaro'),
(10, 46, 'Jamshedpur'),
(10, 47, 'Deoghar'),
(10, 48, 'Hazaribagh'),
(10, 49, 'Dhanbad'),
(11, 50, 'Mysore'),
(11, 51, 'Davangere'),
(11, 52, 'Mangalore'),
(11, 53, 'Hubli-Dharwad'),
(11, 54, 'Belgaum'),
(12, 55, 'Kochi'),
(12, 56, 'Kozhikode'),
(12, 57, 'Thrissur'),
(12, 58, 'Malappuram'),
(13, 59, 'Indore'),
(13, 60, 'Gwalior'),
(13, 61, 'Jabalpur'),
(13, 62, 'Ujjain'),
(13, 63, 'Sagar'),
(14, 64, 'Pune'),
(14, 65, 'Nagpur'),
(14, 66, 'Nashik'),
(14, 67, 'Aurangabad'),
(14, 68, 'Solapur'),
(15, 69, 'Solapur'),
(15, 70, 'Ukhrul'),
(15, 71, 'Tamenglong'),
(15, 72, 'Chandel'),
(15, 73, 'Senapati'),
(16, 74, 'Cherrapunji'),
(16, 75, 'Tura'),
(16, 76, 'Jowai'),
(16, 77, 'Baghmara'),
(16, 78, 'Nongpoh'),
(17, 79, 'Lunglei'),
(17, 80, 'Serchhip'),
(17, 81, 'Champhai'),
(17, 82, 'Tuipang'),
(17, 83, 'Mamit'),
(18, 84, 'Tuensang'),
(18, 85, 'Zunheboto'),
(18, 86, 'Mokokchung'),
(18, 87, 'Kiphire Sadar'),
(18, 88, 'Kiphire Sadar'),
(18, 89, 'Phek'),
(19, 90, 'Rourkela'),
(19, 91, 'Cuttack'),
(19, 92, 'Brahmapur'),
(19, 93, 'Puri'),
(19, 94, 'Sambalpur'),
(20, 95, 'Amritsar'),
(20, 96, 'Jalandhar'),
(20, 97, 'Ludhiana'),
(20, 98, 'Patiala'),
(20, 99, 'Kapurthala'),
(21, 100, 'Bikaner'),
(21, 101, 'Jaisalmer'),
(21, 102, 'Jodhpur'),
(21, 103, 'Udaipur'),
(21, 104, 'Ajmer'),
(22, 105, 'Namchi'),
(22, 106, 'Gyalshing'),
(22, 107, 'Mangan'),
(22, 108, 'Rabdentse'),
(23, 109, 'Tiruchirappalli'),
(23, 110, 'Madurai'),
(23, 111, 'Erode'),
(23, 112, 'Vellore'),
(23, 113, 'Coimbatore'),
(24, 114, 'Warangal'),
(24, 115, 'Nizamabad'),
(24, 116, 'Karimnagar'),
(24, 117, 'Adilabad'),
(24, 118, 'Khammam'),
(25, 119, 'Amarpur'),
(25, 120, 'Kumarghat'),
(25, 121, 'Udaipur'),
(25, 122, 'Gakulnagar'),
(25, 123, 'Kunjaban'),
(26, 124, 'Noida'),
(26, 125, 'Varanasi'),
(26, 126, 'Allahabad'),
(26, 127, 'Agra'),
(26, 128, 'Kanpur'),
(27, 129, 'Haridwar'),
(27, 130, 'Roorkee'),
(27, 131, 'Rishikesh'),
(27, 132, 'Kashipur'),
(27, 133, 'Haldwani'),
(28, 134, 'Darjeeling'),
(28, 135, 'Siliguri'),
(28, 136, 'Asansol'),
(28, 137, 'Howrah'),
(28, 138, 'Durgapur');

-- --------------------------------------------------------

--
-- Table structure for table `currentpostdata`
--

CREATE TABLE `currentpostdata` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `discription` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `mysqlTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `currentpostdata`
--

INSERT INTO `currentpostdata` (`id`, `title`, `discription`, `image`, `mysqlTime`) VALUES
(1, 'Social media, managing personal finance and more: UGC’s revised curriculum of life skills for higher institutions', 'As per the revised guidelines, each course carries two credits, and the entire range of courses carries eight credits in all.', 'Life-skills.avif', '2023-08-21 11:10:50'),
(2, 'New Covid-19 variant BA.2.86: All you need know about this Omicron sub-variant', 'According to Dr Sabine Kapasi, public health leader, UNDAC & Geneva, discovered amid a resurgence of Covid-19 cases across the globe, the BA.2.86 variant has drawn attention due to its significant number of genetic mutations', 'covid-19.avif', '2023-08-21 11:12:33'),
(3, 'Papri Chaat, Dahi Puri listed as worst-rated Indian street foods; guess others', 'Papri Chaat, a part of the street food scene in north India, was seventh on the list. The dish is also famous and well-loved in Pakistan and Bangladesh.', 'dahi-puri-taste-atlas.avif', '2023-08-21 11:13:08'),
(4, 'Roshni Chopra tries viral banana peel facial; find out if it works', '\"It is so soothing and makes the skin brighter and hydrated,\" she said, adding that she is \"obsessed\" with this DIY skincare trend', 'roshni-chopra-1200-2.avif', '2023-08-21 11:14:36'),
(5, 'Exercises to get rid of your hunchback', 'Hand and arm exercises often stretch and strengthen the chest and shoulder muscles which helps in balancing out the muscle tightness, said Prof (Dr) Ali Irani, head, physiotherapy and sports medicine, Nanavati Max Super Speciality Hospital, Mumbai', 'exercise_200_neck.avif', '2023-08-21 11:15:23'),
(6, 'Exercises to get rid of your hunchback', 'Hand and arm exercises often stretch and strengthen the chest and shoulder muscles which helps in balancing out the muscle tightness, said Prof (Dr) Ali Irani, head, physiotherapy and sports medicine, Nanavati Max Super Speciality Hospital, Mumbai', 'exercise_200_neck.avif', '2023-08-21 11:15:30'),
(7, 'From Ranveer Singh to Ananya Panday: Fashion hits and misses (Aug 14-20)', 'Find out whose look we liked, and who missed the mark.', 'Fashion-Hit-Misses_18th-Aug-23-copy.avif', '2023-08-21 11:16:39'),
(8, '‘Kamaal ka khaana hai’: Shreyas Talpade speaks about finger-licking Maharashtrian food', '\"Maharashtrian street food is what we have grown up eating,\" said actor Shreyas Talpade', 'shreyas-talpade_1200.avif', '2023-08-21 11:17:40'),
(9, 'dsfsdf', 'dsfsdf', '14592_1595934410637784_6047824382113935902_n.jpg', '2023-09-16 07:34:34');

-- --------------------------------------------------------

--
-- Table structure for table `politicespostdata`
--

CREATE TABLE `politicespostdata` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `discription` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `mysqlTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `politicespostdata`
--

INSERT INTO `politicespostdata` (`id`, `title`, `discription`, `image`, `mysqlTime`) VALUES
(1, 'In NEET row, TN harks back to an old debate: should education be in Concurrent List?', 'The Indira Gandhi govt brought education into the list giving both Centre and states say over it, through the wide-ranging 42nd Amendment.', 'PTI08_20_2023_000077B-logo.avif', '2023-08-21 11:19:44'),
(2, 'BJP early mover ploy in MP, Chhattisgarh: Why it has picked the seats it has', 'In the 39 seats for which candidates named by the party in MP three months ahead of polls, it did reasonably well before 2018; in 21 shortlisted in Chhattisgarh, it has been performing poorly since 2008', 'cats-67.avif', '2023-08-21 11:20:30'),
(3, 'Today in Politics: Mamata Banerjee to meet Muslim clerics in Kolkata, Haryana Congress feud goes on', 'Plus, Rahul Gandhi continues his Ladakh trip and may be in Kargil, and Supreme Court to resume hearing pleas challenging Bihar caste survey.', 'mamata-banerjee-2.avif', '2023-08-21 11:21:14'),
(4, 'In high-stakes battle for Madhya Pradesh, Shivraj Singh Chouhan gets a leg-up from Gujarat BJP, other states', 'BJP has assigned a constituency to each of its 230 leaders from Gujarat, UP, Bihar, and Maharashtra and tasked them with preparing ground reports. Of the 48-strong Gujarat contingent, 18 have been assigned tribal seats.', 'Shivraj-Singh-Chouhan.avif', '2023-08-21 11:21:56'),
(5, 'Rajasthan Congress truce likely to hold, Ashok Gehlot camp quiet, as Sachin Pilot moves to CWC', 'CWC appointed a message from high command to the former Rajasthan deputy CM that it still values him and the role he can play in helping the party retain power later this year', 'gehlot-pilot-1.avif', '2023-08-21 11:23:02'),
(6, 'Making foray into Chhattisgarh, Kejriwal pledges poll ‘guarantees’: free power to allowances for women, jobless', 'Kejriwal\'s announcement comes days after differences erupted between AAP and Cong over fighting Lok Sabha polls in Delhi; AAP had lost from all 85 seats it contested in the 2018 Chhattisgarh polls', 'Kejriwal-Chhattisgarh.avif', '2023-08-21 11:24:17'),
(7, 'Why was Spain’s women football coach Jorge Vida celebrating alone without his team? Why did the crowd boo him?', 'Discomfort around coach, FA chief lip-kissing player at medals ceremony: What is being talked about after Spain’s Women’s World Cup win, and what should be?', 'spain-coach.avif', '2023-08-21 11:27:54');

-- --------------------------------------------------------

--
-- Table structure for table `recentpostdata`
--

CREATE TABLE `recentpostdata` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `discription` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `mysqlTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `recentpostdata`
--

INSERT INTO `recentpostdata` (`id`, `title`, `discription`, `image`, `mysqlTime`) VALUES
(1, 'test data', 'test data for test', '11554_611229515698974_775130033734637423_n.jpg', '2023-08-21 08:50:48'),
(2, 'Observing the day of her father’s sacrifice in J&K, a deputy commissioner pays homage to soldier killed in Ladakh', 'Gunner Tarandeep Singh, who died two days ago in an accident near Leh, was born in 2000, the year in which Parneet Shergill’s father Brigadier B S Shergill was killed in a blast on August 23.', 'parneet-shergill.avif', '2023-08-21 11:04:00'),
(3, 'Hit criminals so hard that it creates fear in their minds: Minister Chandrakant Patil to Pimpri, Pune police', 'Chandrakant Patil asked the Pune and Pimpri-Chinchwad police commissioners to divert their attention to the rampant use of drugs among youngsters.', 'ch1776915.avif', '2023-08-21 11:04:52'),
(4, 'MHA debars 2 Haryana cadre IPS officers from central deputation, foreign assignments for 5 years', 'The officers are Om Prakash Narwal, currently posted as Joint Commissioner of Police, Faridabad, and Abhishek Jorwal, posted as Superintendent of Police, Kaithal.', 'mha-debars-ips-officers.avif', '2023-08-21 11:05:36'),
(5, 'A woman can live, fight and progress without a man: President', 'She was speaking at an event held by the Army Wives Welfare Association (AWWA) at the Manekshaw Centre here', 'President-address.avif', '2023-08-21 11:07:21'),
(6, 'Kejriwal targets Shivraj Chouhan: Mama cheated… now trust your chacha', 'At the event, the Delhi CM released ‘Kejriwal ki Guarantee’ document, promising free electricity supply, quality education, free healthcare for all, free pilgrimage to the elderly, an honorarium of Rs 1 crore to the families of fallen soldiers, among othe', 'Arvind-Kejriwal-3.avif', '2023-08-21 11:08:18');

-- --------------------------------------------------------

--
-- Table structure for table `sportpostdata`
--

CREATE TABLE `sportpostdata` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `discription` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `mysqlTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sportpostdata`
--

INSERT INTO `sportpostdata` (`id`, `title`, `discription`, `image`, `mysqlTime`) VALUES
(1, 'HS Prannoy advances to second round of World Championships', 'A calm Prannoy, however, saved all three game points before hitting wide to once again hand over the advantage to his rival.', 'HS-Prannoy-1.avif', '2023-08-21 11:25:55'),
(2, '‘One batting slot does not make much difference’: Sourav Ganguly on No 4 position', 'Ganguly said India will enter the semifinals of the World Cup and urged everyone to give the side a bit of time to find the mojo.', '21-Sourav-Ganguly-2col.avif', '2023-08-21 11:26:30'),
(3, '‘Kohli has batted at 3….openers can’t bat down, woh pagalpanti nahi karte hum’: Rohit Sharma on India’s Asia Cup squad', 'Updating on the fitness of KL Rahul and Shreyas Iyer, chief selector Ajit Agarkar stated that while the latter has been declared match fit, Sanju Samson has been added as a back up for Rahul, who\'s sustained a niggle.', 'Kohli-Rohit-1.avif', '2023-08-21 11:27:11'),
(4, 'KL Rahul, Shreyas Iyer to make comeback in Asia Cup, Tilak Varma gets call-up', 'With Kuldeep Yadav being the lead spinner, the selectors have chosen to ignore Chahal as three tweakers were deemed good enough.', 'shreyas-iyer-kl-rahul.avif', '2023-08-21 11:28:34'),
(5, 'India squad for Asia Cup 2023: Tilak Varma, KL Rahul and Shreyas Iyer picked', 'Team India squad for Asia Cup 2023: The men in blue led by Rohit Sharma have a mix of experience and youth.', 'team-india-asia-cup.avif', '2023-08-21 11:29:16'),
(6, 'Asia Cup 2023 Team India Squad Announcement Live Updates: Shreyas Iyer-KL Rahul back, Tilak Varma receives maiden ODI call up', 'Asia Cup 2023 Team India Squad Announcement Today Live Updates: Sanju Samson was added as a reserve.', 'WhatsApp-Image-2023-08-21-at-10.51.46-AM.avif', '2023-08-21 11:30:29');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `stateid` int(10) UNSIGNED NOT NULL,
  `statename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`stateid`, `statename`) VALUES
(1, 'Andhra Pradesh	'),
(2, 'Arunachal Pradesh'),
(3, 'Assam'),
(4, 'Bihar'),
(5, 'Chhattisgarh'),
(6, 'Goa	'),
(7, 'Gujarat'),
(8, 'Haryana'),
(9, 'Himachal Pradesh	'),
(10, 'Jharkhand'),
(11, 'Karnataka'),
(12, 'Kerala'),
(13, 'Madhya Pradesh'),
(14, 'Maharashtra'),
(15, 'Manipur'),
(16, 'Meghalaya'),
(17, 'Mizoram'),
(18, 'Nagaland'),
(19, 'Odisha'),
(20, 'Punjab'),
(21, 'Rajasthan'),
(22, 'Sikkim'),
(23, 'Tamil Nadu	'),
(24, 'Telangana'),
(25, 'Tripura'),
(26, 'Uttar Pradesh'),
(27, 'Uttarakhand'),
(28, 'West Bengal	');

-- --------------------------------------------------------

--
-- Table structure for table `updatepostdata`
--

CREATE TABLE `updatepostdata` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `discription` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `mysqlTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `updatepostdata`
--

INSERT INTO `updatepostdata` (`id`, `title`, `discription`, `image`, `mysqlTime`) VALUES
(1, 'Gadar 2 box office collection day 10: ', 'Gadar 2 box office collection day 10: Sunny Deol-starrer set to cross Rs 400 crore mark', 'gadar-2-290.avif', '2023-08-21 10:54:06'),
(2, 'Cillian Murphy says Christopher Nolan’s Interstellar broke his heart', 'Cillian Murphy has been a regular in Christopher Nolan\'s movies since the Batman Begins days in 2005. He appeared in The Dark Knight, Inception, The Dark Knight Rises, and Dunkirk before the actor was cast to lead to Oppenheimer.', 'Cillian-Murphy-1.avif', '2023-08-21 10:55:49'),
(3, 'Nick Jonas reveals Indian dishes he loves and there is dosa on the list. Watch', 'Nick recently revealed the name of the Indian dishes he loves to eat. His Indian fans are elated to find a \'desi\' connection with the American singer.\r\n\r\n', 'nick-priyanka.avif', '2023-08-21 10:56:30'),
(4, 'AP Dhillon says he slept on suitcases because hotel denied room, reveals a ‘brown girl’ helped him', 'AP Dhillon said that since he did not have a credit card, the hotel denied him a room and added that he slept outside on suitcases.\r\n', 'AP-Dhillon.avif', '2023-08-21 10:57:02'),
(5, 'Pankaj Tripathi’s father passes away', 'Pankaj Tripathi\'s father died due to age-related issues. The actor is currently on his way to his village in Gopalganj, Bihar.', 'pankaj-tripathi-father.avif', '2023-08-21 10:57:27'),
(6, 'Akshay Kumar’s spokesperson denies reports that he is helping Sunny Deol pay off his loan: ‘Absolutely untrue’', 'A report had claimed that Akshay Kumar came forward to bail out Sunny Deol by offering him a huge chunk of money--around Rs 30-40 crore--to settle his loan.', 'WhatsApp-Image-2023-08-21-at-12.58.54-PM.avif', '2023-08-21 10:58:43'),
(7, 'Ghoomer box office collection day 3: Abhishek Bachchan’s film struggles amidst Gadar 2 rampage', 'Ghoomer box office collection day 3: Abhishek Bachchan and Saiyami Kher’s sports drama Ghoomer is helmed by R Balki. The film earned Rs 3.45 crore in its first weekend.', 'ghoomer-1200.avif', '2023-08-21 10:59:51'),
(8, 'Prakash Raj faces backlash after tweet on Chandrayaan 3 goes viral: ‘You have stooped so low…’', 'Prakash Raj is being slammed for his sarcastic jab at India\'s Moon Mission Chandrayaan 3. Social media users called him out for confusing political trolling with national matters.', 'prakash.avif', '2023-08-21 11:01:27'),
(9, 'Elvish Yadav organises first meet-up in Gurugram after Bigg Boss OTT 2 win, receives praise from Haryana CM Manohar Lal Khattar', 'Elvish Yadav, the winner of Bigg Boss OTT 2, organized his first meet-up following his reality show triumph in Gurugram. Haryana Chief Minister Manohar Lal Khattar also attended the event.', 'elvish-2.avif', '2023-08-21 11:02:19');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `img` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `mysqlTime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `name`, `lname`, `contact`, `address`, `email`, `password`, `img`, `city`, `state`, `mysqlTime`) VALUES
(1, 'Ram', 'Sharma', '9878986545', 'Magarptta Pune', 'ram@gmail.com', 'Ram123@123', 'bhole.jpg', '64', '14', '2023-08-13 15:10:10'),
(2, 'Piyush', 'Bhatnagar', '9890765120', 'Gola ka Mandir Gwalior', 'piyush@gmail.com', 'Piyush@123', 'IMG-20220908-WA0000.jpg', '64', '14', '2023-08-13 15:15:40'),
(3, 'Piyush', 'Bhatnagar', '9890765120', 'Shatabdi Puram Gwalior', 'piyush@gmail.com', 'Piyush@123', 'IMG-20220908-WA0000.jpg', '60', '13', '2023-08-13 15:17:45'),
(4, 'Amit', 'Dube', '8789876543', 'Indore Pardeshipuara', 'amit@gmail.com', 'Amit@123', 'IMG-20221030-WA0001.jpg', '59', '13', '2023-08-13 15:33:20'),
(5, 'Ashita', 'Bhatnagar', '8789865450', 'Lucknow ', 'ashita@gmail.com', 'Ashita@123', '20220214_142019.jpg', '128', '26', '2023-08-13 15:36:31'),
(6, 'test', 'data', '6732098765', 'test', 'test@gmail.com', 'Test@123', '11554_611229515698974_775130033734637423_n.jpg', '46', '10', '2023-08-17 07:50:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`citiesid`);

--
-- Indexes for table `currentpostdata`
--
ALTER TABLE `currentpostdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `politicespostdata`
--
ALTER TABLE `politicespostdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recentpostdata`
--
ALTER TABLE `recentpostdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sportpostdata`
--
ALTER TABLE `sportpostdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`stateid`);

--
-- Indexes for table `updatepostdata`
--
ALTER TABLE `updatepostdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `citiesid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT for table `currentpostdata`
--
ALTER TABLE `currentpostdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `politicespostdata`
--
ALTER TABLE `politicespostdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `recentpostdata`
--
ALTER TABLE `recentpostdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sportpostdata`
--
ALTER TABLE `sportpostdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `stateid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `updatepostdata`
--
ALTER TABLE `updatepostdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
