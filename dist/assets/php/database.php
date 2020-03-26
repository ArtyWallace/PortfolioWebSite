<?php 

$connection = mysqli_connect(
    $config['database']['server'],
    $config['database']['username'],
    $config['database']['password'],
    $config['database']['name']
);

if (connection == false) {
    echo "Не удалось подключиться к базе данных<br>";
    echo myscli_connect_error();
    exit();
}

