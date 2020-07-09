function openNav() {
	document.getElementById("sidebar").style.width = "250px";
	document.getElementById("menu").style.display = "none";
};
function closeNav() {
	document.getElementById("sidebar").style.width = "0";
	document.getElementById("menu").style.display = "inline";
};   
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
function Sobre2() {
    document.getElementById( 'Sobre' ).scrollIntoView();
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menu").style.display = "inline";    
};
function Robos2() {
    document.getElementById( 'Robos' ).scrollIntoView(); 
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menu").style.display = "inline";
};
function Competicoes2() {
    document.getElementById( 'Competicoes' ).scrollIntoView();
    document.getElementById("sidebar").style.width = "0"; 
    document.getElementById("menu").style.display = "inline"; 
};
function Contato2() {
    document.getElementById( 'Contato' ).scrollIntoView(); 
    document.getElementById("sidebar").style.width = "0"; 
    document.getElementById("menu").style.display = "inline";  
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
   