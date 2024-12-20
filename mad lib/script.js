document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("order-btn").addEventListener("click", getOrder);

  function getOrder() {
    let Name = document.getElementById("Name-input").value;
    let flavour = document.getElementById("flav-input").value;
    let topping1 = document.getElementById("top1-input").value;
    let topping2 = document.getElementById("top2-input").value;
    let size = document.getElementById("size-input").value;

    let output = `Hey ${Name}, your ${size} ${flavour} sundae with ${topping1} and ${topping2} is ready!`;

    document.getElementById("order-output").innerHTML = output;
  }
});
