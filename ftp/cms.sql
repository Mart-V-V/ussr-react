-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 02 2024 г., 13:35
-- Версия сервера: 5.6.51-log
-- Версия PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cms`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `title` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `src` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`ID`, `title`, `src`, `content`) VALUES
(1, 'Велосипедистка1', './pics/2021/result001.jpg', 'Маслянная пастель1'),
(1, 'Велосипедистка2', './pics/2021/result001.jpg', 'Маслянная пастель2');

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE `pages` (
  `ID` int(11) NOT NULL,
  `title` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `src` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` varchar(2500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`ID`, `title`, `src`, `short`, `content`, `category`) VALUES
(1, 'Велосипедистка1', './pics/2021/result001.jpg', 'Велосипедистка1', 'Маслянная пастель1', 1),
(2, 'Велосипедистка2', './pics/2021/result001.jpg', 'Велосипедистка2', 'Маслянная пастель2', 1),
(3, 'Велосипедистка3', './pics/2021/result001.jpg', 'Велосипедистка3', 'Маслянная пастель3', 2),
(4, 'Велосипедистка4', './pics/2021/result001.jpg', 'Велосипедистка4', 'Маслянная пастель4', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `ID` int(11) NOT NULL,
  `title` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `src` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` varchar(2500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`ID`, `title`, `src`, `short`, `content`, `category`) VALUES
(1, 'Велосипедистка1', './pics/2021/result001.jpg', 'Велосипедистка1', 'Маслянная пастель1', 1),
(2, 'Велосипедистка2', './pics/2021/result001.jpg', 'Велосипедистка2', 'Маслянная пастель2', 1),
(3, 'Велосипедистка3', './pics/2021/result001.jpg', 'Велосипедистка3', 'Маслянная пастель3', 2),
(4, 'Велосипедистка4', './pics/2021/result001.jpg', 'Велосипедистка4', 'Маслянная пастель4', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
