
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

/*document.querySelector('html').onclick = function() 
{
    alert("Hey\n le site xxxvidsxxx est trop bien.\n Viens dessus stp please");
}*/

setTimeout (function()
	{alert("Hey\n le site xxxvidsxxx est trop bien.\n Viens dessus stp please");},10000);


