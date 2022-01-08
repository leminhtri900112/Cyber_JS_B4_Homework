var button = document.getElementById("button");
var select = document.getElementById("value");
button.addEventListener("click", function (e) {
  e.preventDefault();
  welcome();
});
function welcome() {
  var valueSelect = select.value;
  if (valueSelect === "") {
    alert("Vui lòng chọn người");
  } else if (valueSelect === "bo") {
    alert("Chào bố");
  } else if (valueSelect === "me") {
    alert("Chào mẹ");
  } else if (valueSelect === "atrai") {
    alert("Chào anh trai");
  } else if (valueSelect === "egai") {
    alert("Chào em gái");
  }
}
