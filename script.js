function openNav() {
	document.getElementById("sidenav").style.width = "250px";
}
function closeNav() {
	document.getElementById("sidenav").style.width = "0";
}
function Sobre() {
    document.getElementById( 'Sobre' ).scrollIntoView();    
};
function Robos() {
    document.getElementById( 'Robos' ).scrollIntoView(); 
};
function Competicoes() {
    document.getElementById( 'Competicoes' ).scrollIntoView();   
};
function Contato() {
    document.getElementById( 'Contato' ).scrollIntoView();    
};
var lastScrollTop = window.pageYOffset;
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (window.scrollY==0) {	
   	document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.backgroundColor = "#303030";
}else {
	if (st > lastScrollTop){
      document.getElementById("menu").style.top = "-55px";
      document.getElementById("menu").style.backgroundColor = "#black";
   } else {
      document.getElementById("menu").style.top = "0px";
      document.getElementById("menu").style.backgroundColor = "black";
   }
 }
 lastScrollTop = st <= 0 ? 0 : st;
}, false);
   