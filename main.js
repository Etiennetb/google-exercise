
document.getElementById("navdroite").style.display = "none";
document.querySelector("footer").style.display = "none";
document.querySelector("section").style.display = "none";
document.getElementById("navgauche").style.display = '';

let boutonGeneral = document.querySelector('button[type=button2]');

boutonGeneral.onclick = function() 
{ 
document.getElementById("navdroite").style.display = "";
document.querySelector("footer").style.display = "";
document.querySelector("section").style.display = "";
document.getElementById("navgauche").style.display = "none";
}