function fun() {
  document.getElementById("frame1").style.visibility = "visible";
  document.getElementById("frame1").classList.add("style");
}
function remove() {
  document.getElementById("frame1").classList.remove("style");
  document.getElementById("frame1").style.visibility = "hidden";
}
