document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault()
    main()
})
function main() {
    const weight = parseInt(document.getElementById("weight").value)
    const height = parseInt(document.getElementById("height").value)
    const age = parseInt(document.getElementById("age").value)
    const sex = document.getElementById("sex").value
    const frequently = document.getElementById("frequently").value
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