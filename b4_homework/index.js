var id = function (id) {
  return document.getElementById(id);
};

var output = id("exampleOutput");
var button = id("button");
var inputEdge1 = id("exampleInputEdge1");
var inputEdge2 = id("exampleInputEdge2");
var inputEdge3 = id("exampleInputEdge3");

button.addEventListener("click", function (e) {
  e.preventDefault();
  check();
});

function check() {
  var Edge1 = inputEdge1.value * 1;
  var Edge2 = inputEdge2.value * 1;
  var Edge3 = inputEdge3.value * 1;
  // Kiểm tra co phai tam giac hay khong
  if (Edge1 + Edge2 > Edge3 && Edge1 + Edge3 > Edge2 && Edge2 + Edge3 > Edge1) {
    if (Edge1 === Edge2 && Edge2 === Edge3) {
      output.value = "Tam giác đều ";
    } else if (Edge1 === Edge2 || Edge1 === Edge3 || Edge2 === Edge3) {
      if (
        Edge1 * Edge1 + Edge2 * Edge2 == Edge3 * Edge3 ||
        Edge1 * Edge1 + Edge3 * Edge3 == Edge2 * Edge2 ||
        Edge3 * Edge3 + Edge2 * Edge2 == Edge1 * Edge1
      ) {
        output.value = "Tam giác vuông cân";
      } else output.value = "Tam giác cân ";
    } else if (
      Edge1 * Edge1 + Edge2 * Edge2 == Edge3 * Edge3 ||
      Edge1 * Edge1 + Edge3 * Edge3 == Edge2 * Edge2 ||
      Edge3 * Edge3 + Edge2 * Edge2 == Edge1 * Edge1
    ) {
      output.value = "Tam giác vuông ";
    } else output.value = "Tam giác nhọn ";
  } else output.value = "Đây không phải là tam giác";
}
