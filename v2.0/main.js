var weight, height, age, sex, frequency, bmi, bmr, tdee;

document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();

    ["weight", "height", "age", "sex", "frequency"].forEach(function(id) {
        validate(id);
    });

    if(!document.getElementById("form").checkValidity()) {
        return;
    }

    var form = document.getElementById("form");
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.php", true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            return;
        }
    }

    xhr.send(formData);

    define();
    calculate();
    display(); 
});

function define() {
    weight = parseInt(document.getElementById("weight").value);
    height = parseInt(document.getElementById("height").value);
    age = parseInt(document.getElementById("age").value);
    sex = document.getElementById("sex").value;
    frequency = document.getElementById("frequency").value;
}

function validate(id) {
    var element = document.getElementById(id);
    if (element.validity.valueMissing) {
        element.setCustomValidity("ENTER THE VALUE!!!");
    }
    else {
        element.setCustomValidity("");
    }

    element.reportValidity();
}

function calculate() {
    bmi = parseInt(weight/((height*height)/10000));
    if (sex === "Male")
        bmr = parseInt(66+(13.7*weight)+(5*height)-(6.8*age));
    if (sex === "Female")
        bmr = parseInt(665+(9.6*weight)+(1.8*height)-(4.7*age));
    tdee = parseInt(frequency*bmr);
}

function display() {
    document.getElementById("bmi").innerHTML = bmi.toString();
    document.getElementById("bmr").innerHTML = bmr.toString();
    document.getElementById("tdee").innerHTML = tdee.toString();
}