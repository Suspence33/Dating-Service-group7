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






















/*document.getElementById("try").innerHTML = localStorage.getItem("name");

if (localStorage.getItem("name")) {
            document.getElementById("try").style.display = "block";
        }
        else {
            document.getElementById("try").style.display = "none";   
}



function save1(){
	var saveN = document.getElementById("text1").value;
	console.log(saveN);
	localStorage.setItem("name", saveN);
	retrieve(saveN);
	document.getElementById("try").innerHTML = localStorage.getItem("name");
	document.getElementById("try").style.display = "block";
	}

function deleteAB(){
	document.getElementById("text1").value = " ";
	localStorage.removeItem('name');
	document.getElementById("try").innerHTML = "";
	document.getElementById("try").style.display = "none";
}*/