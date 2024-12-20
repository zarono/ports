document
  .getElementById("calc-btn")
  .addEventListener("click", calculateTrapezoidArea);

function calculateTrapezoidArea() {
  let top = parseFloat(document.getElementById("top").value);
  let bottom = parseFloat(document.getElementById("bottom").value);
  let height = parseFloat(document.getElementById("height").value);
  let bottom2 = parseFloat(document.getElementById("bottom2").value);

  let area = height * bottom + bottom2 / 2;

  document.getElementById("area-out").innerHTML = area;
}
