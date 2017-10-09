document.onkeyup = function(event) {
	document.getElementById("welcome").setAttribute("style","display:none")
}


var wins; 
var hangmanWord = selectedWord();
var wordOptions = ["ErfMoney", "CodefoLyfe", "GetMethodsDieTrying"];
var gameDiv = document.getElementById("game");
var remainingChances = 15;

	var selectedWord = function () {
			return options [Math.random() * wordOptions.length + 1];
		}

		var updateWordOnHTML = function () {
			var html = "wins:" + wins + "<br>";
			var UnderScores = "";
			for(var i = 0, i < selectedWord.length; i++){
				underScores += "_";
			}
			html = html + UnderScores;
			gameDiv.innerHTML = html; 
		}
