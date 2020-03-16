
/**
 * 123 Game
 *
 * get a random number and show the player
 * When the player clicks a button check if the value corresponds to the correct
 * 
*/


	var rNr= Math.floor(Math.random() * 3) + 1;
	document.getElementById('randomNumbers').innerHTML = rNr;

	function backFunction() {
		location.href = "index.html";
	}

	function answerFunction() {
		var button1 = document.getElementsByClassName("button1").value;
		var button2 = document.getElementsByClassName("button2").value;
		var button3 = document.getElementsByClassName("button3").value;
		var number = document.getElementById("randomNumbers").value;
		var text;

		if (number === button1 || number === button2 || number === button3){
			text = "OK its";
		}else{
			text = "Nope!";
		}

		document.getElementById("rightWrong").innerHTML = text;
	}

/**
 *
*/