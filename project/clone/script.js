const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.innerText;
    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      appendToDisplay(String(value));
    }
  });
});

function appendToDisplay(number) {
  display.value += number;
  document.getElementById("display").number += number;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
