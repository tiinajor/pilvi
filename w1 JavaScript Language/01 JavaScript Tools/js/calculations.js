var num1;
var num2;

var getValues = () => {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
}

var checkInput = () => {
    if (num1 === '' || num2 === '') return "Täytä kaikki kentät";
}

var checkNumericValue = () => {
    var isNaN1 = Number(num1);
    var isNaN2 = Number(num2);
    if (isNaN(num1) || isNaN(num2)) return "Piti olla numero";
}

function multiplyBy() {
    getValues();
    var validInputs = checkInput();
    var numericValue = checkNumericValue();

    if (validInputs || numericValue) {
        document.getElementById("result").innerHTML = validInputs || numericValue;
    } else {
        document.getElementById("result").innerHTML = num1 * num2;
    }
}

function divideBy() {
    getValues();
    var validInputs = checkInput();
    var numericValue = checkNumericValue();
    var divideZero = "Ei voi jakaa nollalla";

    if (validInputs || numericValue || num2 == 0) {
        document.getElementById("result").innerHTML = validInputs || numericValue || divideZero;
    } else {
        document.getElementById("result").innerHTML = num1 / num2;
    }

}

