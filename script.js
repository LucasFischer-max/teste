function openNav() {
	document.getElementById("sidebar").style.width = "250px";
}
function closeNav() {
	document.getElementById("sidebar").style.width = "0";
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}