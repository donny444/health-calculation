<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DHealth</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container" id="upper">
        <div id="heading">
            <h1>Health Calculator</h1>
            <h3>A webpage contains BMI, BMR and TDEE calculation</h3>
        </div>
        <div id="form">
            <form id="user_input" action="index.php" method="post">
                <h3>Enter the values</h3>
                <ul>
                    <li>
                        <label for="weight">Your weight(kg): </label>
                        <input type="number" id="weight" form="user_input" name="weight" required>
                    </li>
                    <li>
                        <label for="height">Your height(cm): </label>
                        <input type="number" id="height" form="user_input" name="height" required>
                    </li>
                    <li>
                        <label for="age">Your age: </label>
                        <input type="number" id="age" form="user_input" name="age" required>
                    </li>
                    <li>
                        <label for="sex">Your sex: </label>
                        <select id="sex" form="user_input" name="sex" required>
                            <option name="sex" value="Male">Male</option>
                            <option name="sex" value="Female">Female</option>
                        </select>
                    </li>
                    <li>
                        <label for="frequently">How frequently do you workout: </label>
                        <select id="frequently" form="user_input" name="frequently" required>
                            <option value="1.2">a)rarely or never</option>
                            <option value="1.375">b)1-3 times per week</option>
                            <option value="1.55">c)4-5 times per week</option>
                            <option value="1.7">d)6-7 times per week</option>
                            <option value="1.9">e)up to 2 times per day</option>
                        </select>
                    </li>
                    <input type="submit" id="submit" form="user_input" value="submit">
                </ul>
            </form>
        </div>
    </div>
    <br>
    <hr>
    <br>
    <?php
        //XAMPP
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "health_calculation";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if($conn->connect_error)
        {
            die("Connection failed: " . $conn->connect_error);
        }

        $stmt = $conn->prepare("INSERT INTO `values` (weight, height, age, sex, frequently, bmi, bmr, tdee) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("iiisdiii", $weight, $height, $age, $sex, $frequently, $bmi, $bmr, $tdee);

        $weight = (int)$_POST["weight"];
        $height = (int)$_POST["height"];
        $age = (int)$_POST["age"];
        $sex = $_POST["sex"];
        $frequently = (float)$_POST["frequently"];

        $bmi = (int)($weight/(($height*$height)/10000));
        if($sex === "Male")
        {
            $bmr = (int)(66+(13.7*$weight)+(5*$height)-(6.8*$age));
        }
        elseif($sex === "Female")
        {
            $bmr = (int)(665+(9.6*$weight)+(1.8*$height)-(4.7*$age));
        }
        $tdee = (int)($frequently*$bmr);

        $stmt->execute();

        echo `
        <div class="container" id="lower">
            <div id="result">
                <h2>BMI Value</h2>
                <h2 id="bmi">-</h2>
            </div>
            <div id="result">
                <h2>BMR Value</h2>
                <h2 id="bmr">-</h2>
            </div>
            <div id="result">
                <h2>TDEE Value</h2>
                <h2 id="tdee">-</h2>
            </div>
        </div>
        `;

        $stmt->close();
        $conn->close();
    ?>
</body>

</html>