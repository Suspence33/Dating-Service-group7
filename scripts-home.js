document.getElementById("input-text").innerHTML = localStorage.getItem("name");

if (localStorage.getItem("name")) {
            document.getElementById("box-text").style.display = "block";
        }
        else {
            document.getElementById("box-text").style.display = "none";   
}



function save(){
	var saveN = document.getElementById("text1").value;
	console.log(saveN);
	localStorage.setItem("name", saveN);
	retrieve(saveN);
	document.getElementById("box-text").style.display = "block";
	document.getElementById("input-name").innerHTML = localStorage.getItem("name");
}


function retrieve(saveN){
	document.getElementById("text1").innerHTML = localStorage.getItem("name");
}

function deleteA(){
	document.getElementById("text1").value = " ";
	localStorage.removeItem('name');
	document.getElementById("input-name").innerHTML = "";
	document.getElementById("box-text").style.display = "none";
}

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

