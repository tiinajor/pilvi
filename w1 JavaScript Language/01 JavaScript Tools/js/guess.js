var wrongAnswers = []
var targetNumber = () => Math.floor(Math.random() * 10) + 1;

function init() {
	
	document.getElementById("myForm").addEventListener("submit", function (event) {
		event.preventDefault();
		var value = this.children[0].value
		if(!isNaN(value) && value !== ''){
			if(value > 0 && value <= 10){
				check(value)
			}else {
				this.children[0].value = "Between 1 & 10"
			}
		
		}else{
			this.children[0].value = "we need a number!"
		}
		
	});
}

function check(value) {
	var correct = targetNumber();
	if (correct == value) {
		wrongAnswers = []
		showWin()
	} else {
		wrongAnswers.push(value)
		if (wrongAnswers.length >= 5) {
			wrongAnswers = []
			showLoss()
		} else {
			showError()
		}
	}
}

function showWin() {
	//document.getElementById('status').innerText = "win"
	document.body.innerHTML = "<h1>WIN</h1>"
}

function showError() {
	document.getElementById('message').innerText = "nope"
}

function showLoss() {
	document.body.innerHTML = "<h1>LOSE</h1>"

}

init();
