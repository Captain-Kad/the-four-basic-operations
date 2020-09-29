function basicOperationsChoice()  {
    var radioValues = document.getElementsByName("basic-operations");
    var chosenValue = getChosenRadioValue(radioValues);
    var firstNumber = Number(document.getElementById("firstNumber").value);
    var secondNumber = Number(document.getElementById("secondNumber").value);

    if (!firstNumber || !secondNumber ) {
        alert("Please enter a number");
        return;
    }

    if (chosenValue === "addition") {
        answerAdd = addition(firstNumber, secondNumber);
        writeAnswer(answerAdd);
    } else if (chosenValue === "subtraction") {
        answerSubtract = subtraction(firstNumber, secondNumber);
        writeAnswer(answerSubtract);
    } else if (chosenValue === "multiplication") {
        answerMultiply = multiplication(firstNumber, secondNumber);
        writeAnswer(answerMultiply);
    } else {
        answerDivide = division(firstNumber, secondNumber);
        writeAnswer(answerDivide);
    }
}

function  addition(firstNumber, secondNumber) {
    return firstNumber  + secondNumber;
}

function subtraction(firstNumber, secondNumber) {
    return firstNumber  - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber  * secondNumber;
}

function division(firstNumber, secondNumber) {
    return firstNumber  / secondNumber;
}

function writeAnswer(stuffToWrite){
    document.getElementById("result").innerHTML = stuffToWrite;
}

function getChosenRadioValue(radioValues){
    for (var chosenValue of radioValues) {
        if (chosenValue.checked) {
          return chosenValue.value;
        }
}
}