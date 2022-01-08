var output = document.getElementById("exampleOutput");
var button = document.getElementById("button");
var inputNumber1 = document.getElementById("exampleInputNumber1");
var inputNumber2 = document.getElementById("exampleInputNumber2");
var inputNumber3 = document.getElementById("exampleInputNumber3");
button.addEventListener("click", function (e) {
  e.preventDefault();
  arrange();
  //   console.log(e);
});

function arrange() {
  var number1 = inputNumber1.value * 1;
  console.log(number1);
  var number2 = inputNumber2.value * 1;
  var number3 = inputNumber3.value * 1;
  if (number1 <= number2 && number2 <= number3) {
    output.value = `${number1}-${number2}-${number3}`;
  } else if (number1 <= number3 && number3 <= number2) {
    output.value = `${number1}-${number3}-${number2}`;
  } else if (number2 <= number1 && number1 <= number3) {
    output.value = `${number2}-${number1}-${number3}`;
  } else if (number2 <= number3 && number3 <= number1) {
    output.value = `${number2}-${number3}-${number1}`;
  } else if (number3 <= number1 && number1 <= number2) {
    output.value = `${number3}-${number1}-${number2}`;
  } else if (number3 <= number2 && number2 <= number1) {
    output.value = `${number3}-${number2}-${number1}`;
  }
}
