var currentInput = "";
var operator = "";
var previousInput = "";

function EnterNumber(number) {
    currentInput += number;//2 digit 
    document.getElementById("Answer").value = currentInput; // update answer 
}

function EnterOperator(op) {
    if (currentInput === "") return;  // do nothing 
    if (previousInput !== "") {
        calculate();  // previous operation , calculate 
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function EnterEqual() {
    if (currentInput === "" || previousInput === "") return;  //should have 2 inputs 
    calculate();
    operator = "";
}

function calculate() {
    var result;
    var prev = parseFloat(previousInput);
    var current = parseFloat(currentInput);
    
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    
    document.getElementById("Answer").value = result;
    currentInput = result.toString();
    previousInput = "";
}

function EnterClear() {
    currentInput = "";
    previousInput = "";
    operator = "";
    document.getElementById("Answer").value = "";
}