<?php
    //XAMPP
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "health-calculation";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error)
    {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO `values` (weight, height, age, sex, frequency, bmi, bmr, tdee) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("iiisdiii", $weight, $height, $age, $sex, $frequency, $bmi, $bmr, $tdee);

    $weight = (int)$_POST["weight"];
    $height = (int)$_POST["height"];
    $age = (int)$_POST["age"];
    $sex = $_POST["sex"];
    $frequency = (float)$_POST["frequency"];

    $bmi = (int)($weight/(($height*$height)/10000));
    if($sex === "Male")
    {
        $bmr = (int)(66+(13.7*$weight)+(5*$height)-(6.8*$age));
    }
    elseif($sex === "Female")
    {
        $bmr = (int)(665+(9.6*$weight)+(1.8*$height)-(4.7*$age));
    }
    $tdee = (int)($frequency*$bmr);

    $stmt->execute();

    $stmt->close();
    $conn->close();
?>