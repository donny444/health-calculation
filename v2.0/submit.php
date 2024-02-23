<?php
    //XAMPP
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "health_calculation";

    $conn = msqli($servername, $username, $password, $dbname);

    if($conn->connect_error)
    {
        die("Connection failed: " . $conn->connect_error);
    }

    $weight = $_POST["weight"];
    $height = $_POST["height"];
    $age = $_POST["age"];
    $sex = $_POST["sex"];
    $frequently = $_POST["frequently"];

    $stmt = $conn->prepare("INSERT INTO health_calculation")