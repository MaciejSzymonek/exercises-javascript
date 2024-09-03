let displayValue = "";

function updateDisplay() {
    if (displayValue === "") {
        document.getElementById("display").innerHTML = "0";
    } else {
        document.getElementById("display").innerHTML = displayValue;
    }
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}
function appendOperator(operator) {
    if (
        displayValue !== "" &&
        !isNaN(displayValue.charAt(displayValue.length - 1))
    ) {
        displayValue += operator;
        updateDisplay();
    }
}


function toggleSign() {
    if (
        displayValue !== "" &&
        !isNaN(displayValue.charAt(displayValue.length - 1))
    ) {
        updateDisplay();
    }
}



function calculate() {
    if (
      displayValue !== "" &&
      !isNaN(displayValue.charAt(displayValue.length - 1))
    ) {
      try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
      } catch (error) {
        displayValue = "Error";
        updateDisplay();
      }
    }
  }

  function clearDisplay() {
    displayValue = "";
    updateDisplay();
  }
  
