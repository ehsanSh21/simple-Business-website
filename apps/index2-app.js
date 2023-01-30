const arrowID = document.getElementById("arrowID");

var myScrollFunc = function() {
  let y = window.onscroll;
  if (y > 900) {
    arrowID.className = "cTop hiden";
  } else {
    arrowID.className = "cTop shown";
  }
};

window.addEventListener("scroll", myScrollFunc);