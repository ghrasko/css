/* DOM maniuláló javascript rutinok */

/* Névvel (id) ellátott DOM elem tulajdonságának módosítása. Csak egy van belőle. */
var i = true;
function manipulateElementByID() {
	if( i ) {
		document.getElementById("main-menu").style.display = "none";
		i = false;
	}
	else {
		document.getElementById("main-menu").style.display = "block";
		i = true;
	}
}
	
/* Egy osztályhoz (class) tartozó DOM elemek tulajdonságának módosítása. Több is lehet belőle. */
var j = true;
function manipulateElementsByClassName() {	
	var x;
	var elements = document.getElementsByClassName("jump-up");
	for( x = 0; x < elements.length; x++ ) {
		elements[x].style.color = (j ? "blue" : "red");
		elements[x].style.backgroundColor = (j ? "yellow" : "wheat");
	}
	j = !j;
}

/* Egy HTML elem (tag) minden DOM előfordulása tulajdonságának módosítása. Több is lehet belőle. */
var k = true;
function manipulateElementsByTagName() {
	var x;
	var elements = document.getElementsByTagName("p");
	for( x = 0; x < elements.length; x++ ) {
		elements[x].style.textAlign = (k ? "justify" : "left");
	}
	k = !k;
}

