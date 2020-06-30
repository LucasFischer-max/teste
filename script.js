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

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (window.scrollY==0) {	
   	document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.backgroundColor = "#303030";
}else {
	if (st > lastScrollTop){
      document.getElementById("menu").style.top = "-55px";
      document.getElementById("menu").style.backgroundColor = "black";
   } else {
      document.getElementById("menu").style.top = "0px";
      document.getElementById("menu").style.backgroundColor = "black";
   }
 }
 lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
   