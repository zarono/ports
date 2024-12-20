document.getElementById("calc").addEventListener("click", Result1);

function Result1() {
  let wage = parseFloat(document.getElementById("txt_wage").value);
  let hours = parseFloat(document.getElementById("txt_hours").value);

  let weeklyCalc = wage * hours;
  let biweeklyCalc = wage * hours * 2;
  let AnnualCalc = wage * hours * 52;
  let monthlyCalc = wage * hours * 4;

  let taxCalc = wage * hours * 52 * 0.1;

  document.getElementById("pay").innerHTML = taxCalc;

  document.getElementById("week").innerHTML = weeklyCalc;
  document.getElementById("bi-week").innerHTML = biweeklyCalc;
  document.getElementById("month").innerHTML = monthlyCalc;
  document.getElementById("year").innerHTML = AnnualCalc;
}
