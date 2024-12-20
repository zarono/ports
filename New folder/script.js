document.getElementById("Android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  document.getElementById("logo").src = "images/Android-vs-Apple.jpg";
}
document.getElementById("the-link").innerHTML = "android Home";

document.getElementById("android").classList.add("red-border");
document.getElementById("apple").classList.remove("redborder");
