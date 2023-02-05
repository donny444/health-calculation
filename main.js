const weight = document.getElementById("weight")
const height = document.getElementById("height")
const age = document.getElementById("age")
const sex = document.getElementsByClassName("sex")
const frequently = document.getElementsByClassName("frequently")
document.getElementById("submit").addEventListener("click",calculate())
function calculate() {
    var bmi = (weight/((height*height)/10000))
    if (sex = "Male")
        var bmr = 66+(13.7*weight)+(5*height)-(6.8*age)
    if (sex = "Female")
        var bmr = 665+(9.6*weight)+(1.8*height)-(4.7*age)
    for (i=0;i<=4;i++)
        var c = [1.2, 1.375, 1.55, 1.7, 1.9]
        if (frequently = document.querySelectorAll("frequently")[i])
            var tdee = c[i]*bmr
    display()
}
function display() {
    document.querySelector("#bmi").innerHTML = bmi
    document.querySelector("#bmr").innerHTML = bmr
    document.querySelector("#tdee").innerHTML = tdee
}
function validation(param) {
    if (param.validity.typemisMatch) {
        param.setCustomValidity("TYPE THE PROPER!!!")
    }
}
validation(weight)
validation(height)
validation(age)