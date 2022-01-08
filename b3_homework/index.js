var id = function (id) {
  return document.getElementById(id);
};

var output = id("exampleOutput");
var button = id("button");
var inputNumber1 = id("exampleInputNumber1");
var inputNumber2 = id("exampleInputNumber2");
var inputNumber3 = id("exampleInputNumber3");

button.addEventListener("click", function (e) {
  e.preventDefault();
  examine();
  //   console.log(e);
});

function examine() {
  var evenEven = 0;
  var evenOdd = 0;
  var number1 = inputNumber1.value * 1;
  var number2 = inputNumber2.value * 1;
  var number3 = inputNumber3.value * 1;

  if (number1 % 2 == 0) {
    evenEven++;
  } else {
    evenOdd++;
  }
  if (number2 % 2 == 0) {
    evenEven++;
  } else {
    evenOdd++;
  }
  if (number3 % 2 == 0) {
    evenEven++;
  } else {
    evenOdd++;
  }

  output.value = `Số lượng số chẵn: ${evenEven}----Số lượng số lẻ: ${evenOdd}`;
}
