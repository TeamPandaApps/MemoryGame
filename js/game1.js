
/**
 * 123 Game
 *
 * get a random number and show the player
 * When the player clicks a button check if the value corresponds to the correct button and tel them if they are wrong ornot
 * 
*/

function instantiate(){
	var rNr= Math.floor(Math.random() * 9) + 1;
	document.getElementById('randomNumbers').innerHTML = rNr;
	document.getElementById("rightWrong").innerHTML=" ";
}

instantiate();


function answerFunction(nr) {
	var number = parseInt(document.getElementById("randomNumbers").textContent, 10);
	var text;

	if (number === nr){
		text = "Riktig!";
		document.getElementById("rightWrong").style.color = "#3CAD28";
	}else{
		text = "Feil :(";
		document.getElementById("rightWrong").style.color = "red";
	}

	document.getElementById("rightWrong").innerHTML = text;
}

/**
 *
*/