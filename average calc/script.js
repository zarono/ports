document.getElementById("avg-btn").addEventListener("clikc", calcAverage);

var input1E1 = document.getElementById("input1");
var input2E1 = document.getElementById("input2");
var input3E1 = document.getElementById("input3");
var avgBtnE1 = document.getElementById("avg-btn");
var avgOutE1 = document.getElementById("avg-out");
avgBtnE1.addEventListener("click", calcAverage);

function calcAverage() {
  let num1 = Number(input1E1.value);
  let num2 = Number(input2E1.value);
  let num3 = Number(input3E1.value);

  let average = (num1 + num2 + num3) / 3;

  avgOutE1.innerHTML = average;

  input1E1.value = "";
  input1E1.value = "";
  input1E1.value = "";

  input1E1.style.backgroundColor = "lightgreen";
  avgOutE1.style.border = "3px dashed maroon";
  avgOutE1.style.padding = "5p 10px";
}
