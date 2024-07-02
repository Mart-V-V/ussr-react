<?php

$servername = "localhost"; // Имя сервера базы данных
$username = "cms"; // Имя пользователя базы данных
$password = "cms"; // Пароль пользователя базы данных
$database = "cms"; // Название базы данных

// Создание соединения
$conn = new mysqli($servername, $username, $password, $database);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}