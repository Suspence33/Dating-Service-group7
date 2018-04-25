
document.onload = alert("You must be the legal age of 18 to use this site");
/*function Free trial(){
var text = document.getElementById ("")
	
}




function Basic(){
	
var text = document.getElementById ("")
	
}

function Premium(){
	
var text = document.getElementById ("")
	
}

function Deluxe(){
	
var text = document.getElementById ("")
	
}*/

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}