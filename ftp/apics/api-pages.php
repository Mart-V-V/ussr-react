<?php

header("Access-Control-Allow-Origin: *");

include_once "../config/config.php";

// Выполнение запроса к базе данных
$sql = "SELECT * FROM `pages` ORDER BY ID ASC";
$result = $conn->query($sql);

// Проверка наличия результатов
if ($result->num_rows > 0) {
    // Инициализация массива для хранения данных
    $data = array();

    // Извлечение данных из результата запроса
    while($row = $result->fetch_assoc()) {
        // Добавление данных в массив
        $data[] = $row;
    }

    // Вывод данных в формате JSON
    echo json_encode($data);
} else {
    echo "0 results";
}

// Закрытие соединения с базой данных
$conn->close();
?>