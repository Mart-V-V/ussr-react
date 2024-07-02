<?php

header("Access-Control-Allow-Origin: *");

include_once "../config/config.php";

// ���������� ������� � ���� ������
$sql = "SELECT * FROM `pages` ORDER BY ID ASC";
$result = $conn->query($sql);

// �������� ������� �����������
if ($result->num_rows > 0) {
    // ������������� ������� ��� �������� ������
    $data = array();

    // ���������� ������ �� ���������� �������
    while($row = $result->fetch_assoc()) {
        // ���������� ������ � ������
        $data[] = $row;
    }

    // ����� ������ � ������� JSON
    echo json_encode($data);
} else {
    echo "0 results";
}

// �������� ���������� � ����� ������
$conn->close();
?>