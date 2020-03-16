
/**
 * 123 Game
 *
 * get a random letter and show the player
 * When the player clicks a button check if the value corresponds to the correct button and tel them if they are wrong or not
 * 
*/


	var str = "abcdefghijklmnopqrstuvwxyzæøå";
	var abc="ABC"
	var res = abc.charAt(Math.floor((Math.random() * 3) + 1));
	document.getElementById('randomLetter').innerHTML = res;
	
	
	function backFunction() {
		location.href = "index.html";
	}

	function answerFunction(letter) {
		var rL = document.getElementById("randomLetter").textContent;
		var text;

		if (letter === rL){
			text = "Riktig!";
		}else{
			text = "Feil :(";
		}

		document.getElementById("rightWrong").innerHTML = text;
	}

/**
 *
*/