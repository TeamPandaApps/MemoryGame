
/**
 * 123 Game
 *
 * get a random number and show the player
 * When the player clicks a button check if the value corresponds to the correct button and tel them if they are wrong ornot
 * 
*/


	var rNr= Math.floor(Math.random() * 3) + 1;
	document.getElementById('randomNumbers').innerHTML = rNr;

	function backFunction() {
		location.href = "index.html";
	}

	function answerFunction(nr) {
		var number = parseInt(document.getElementById("randomNumbers").textContent, 10);
		var text;

		if (number === nr){
			text = "Riktig!";
		}else{
			text = "Feil :(";
		}

		document.getElementById("rightWrong").innerHTML = text;
	}

/**
 *
*/