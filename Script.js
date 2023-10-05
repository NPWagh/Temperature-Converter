function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.innerText = "Invalid input. Please enter a valid number.";
        return;
    }

    var convertedTemp, unitName;

    if (unit === "celsius") {
        convertedTemp = (temperature * 9/5) + 32;
        unitName = "Fahrenheit";
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        unitName = "Celsius";
    }

    result.innerText = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${unitName}`;
}
