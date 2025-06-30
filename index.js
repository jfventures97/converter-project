/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthDescription = document.getElementById("lengthdesc")
let weightDescription = document.getElementById("weightdesc")
let volumeDescription = document.getElementById("volumedesc")

let inputNumber = document.getElementById("numberinput")

document.getElementById("convertbutton").addEventListener("click", function() {
    let inputValue = inputNumber.value
    const meterFeet= (inputValue * 3.281).toFixed(3);
    const feetMeter = (inputValue / 3.281).toFixed(3);
    lengthDescription.textContent = `${inputValue} meters = ${meterFeet} feet | ${inputValue} feet = ${feetMeter} meters `

    const litreGallon= (inputValue * 0.264).toFixed(3);
    const gallonLitre = (inputValue / 0.264).toFixed(3);
    volumeDescription.textContent = `${inputValue} litres = ${litreGallon} gallons | ${inputValue} gallons = ${gallonLitre} litres `


    const kiloPound= (inputValue * 2.204).toFixed(3);
    const poundKilo = (inputValue / 2.204).toFixed(3);
    weightDescription.textContent = `${inputValue} kilos = ${litreGallon} pounds | ${inputValue} pounds = ${gallonLitre} kilos `


})




// 20 meters = 65.616 feet | 20 feet = 6.096 meters

// 20 litres = 5.284 gallons | 20 gallons =75.708 litres

// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
//
//let meterToFeet = 
// Onclick of convert , will create 3 functions
//need grab hold of input


//` ${input} meters = ${input *3.281}` | ${input}  = ${input /3.281}
// lengthDescription.textContent 