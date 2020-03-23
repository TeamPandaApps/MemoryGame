
/**
 * 123 Game
 *
 * get a random letter and show the player
 * When the player clicks a button check if the value corresponds to the correct button and tel them if they are wrong or not
 * 
*/

function instantiate(){
	var str = "abcdefghijklmnopqrstuvwxyzæøå";
	var abc="ABC"
	var res = abc.charAt(Math.floor((Math.random() * 3)));
	document.getElementById('randomLetter').innerHTML = res;
	document.getElementById("rightWrong").innerHTML=" ";
	
}

instantiate();

function answerFunction(letter) {
	var rL = document.getElementById("randomLetter").textContent;
	var text;

	if (letter === rL){
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