document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault();
    main()

    var formData = new FormData(this)

    var xhr = new XMLHttpRequest()
    xhr.open("POST", "submit.php", true)
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log("Form submitted successfully")
        }
    }

    xhr.send(formData)
})
/*function main() {
    define()
    validationAll()
    calculate()
    display()
}
function define() {
    const weight = parseInt(document.getElementById("weight").value)
    const height = parseInt(document.getElementById("height").value)
    const age = parseInt(document.getElementById("age").value)
    const sex = document.getElementById("sex").value
    const frequently = parseInt(document.getElementById("frequently").value)
}
function validation(param) {
    if (param.validity.valueMissing) {
        param.setCustomValidity("ENTER THE VALUE!!!")
    }
    else {
        param.setCustomValidity("")
    }
}
function validationAll() {
    validation(weight)
    validation(height)
    validation(age)
}
function calculate() {
    var bmi = ((weight/((height*height)/10000))).toString()
    if (sex = "Male")
        var bmr = (66+(13.7*weight)+(5*height)-(6.8*age)).toString()
    if (sex = "Female")
        var bmr = (665+(9.6*weight)+(1.8*height)-(4.7*age)).toString()
    var tdee = (frequently*bmr).toString()
}
function display() {
    document.getElementById("bmi").innerHTML = bmi
    document.getElementById("bmr").innerHTML = bmr
    document.getElementById("tdee").innerHTML = tdee
}*/
function main() {
    const weight = parseInt(document.getElementById("weight").value)
    const height = parseInt(document.getElementById("height").value)
    const age = parseInt(document.getElementById("age").value)
    const sex = document.getElementById("sex").value
    const frequently = document.getElementById("frequently").value
    /*if (weight.validity.valueMissing) {
        weight.setCustomValidity("ENTER THE VALUE!!!")
    }
    else {
        weight.setCustomValidity("")
    }
    if (height.validity.valueMissing) {
        height.setCustomValidity("ENTER THE VALUE!!!")
    }
    else {
        height.setCustomValidity("")
    }
    if (age.validity.valueMissing) {
        age.setCustomValidity("ENTER THE VALUE!!!")
    }
    else {
        age.setCustomValidity("")
    }*/
    //validationAll()
    var bmi = parseInt(weight/((height*height)/10000))
    if (sex === "Male")
        var bmr = parseInt(66+(13.7*weight)+(5*height)-(6.8*age))
    if (sex === "Female")
        var bmr = parseInt(665+(9.6*weight)+(1.8*height)-(4.7*age))
    var tdee = parseInt(frequently*bmr)
    document.getElementById("bmi").innerHTML = bmi.toString()
    document.getElementById("bmr").innerHTML = bmr.toString()
    document.getElementById("tdee").innerHTML = tdee.toString()
}
/*function validation(param)
    while (param.validity.valueMissing) {
        param.setCustomValidity("ENTER THE VALUE!!!")
    }
function validationAll()
    validation(weight)
    validation(height)
    validation(age)*/