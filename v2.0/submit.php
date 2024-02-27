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

    $weight = (int)$_POST["weight"];
    $height = (int)$_POST["height"];
    $age = (int)$_POST["age"];
    $sex = $_POST["sex"];
    $frequently = (float)$_POST["frequently"];

    $bmi = (int)($weight/($height*$height)/10000)
    if($sex === "Male")
    {
        $bmr = (int)(66+(13.7*$weight))
    }

    $stmt = $conn->prepare("INSERT INTO health_calculation (weight, height, age, sex, frequently, bmi, bmr, tdee) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("iiisiiii");
