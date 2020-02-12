function cardChange() {
 	var card = document.getElementById("cards");
 	var cardinput = document.getElementById("Card");
	switch (card.innerHTML) {
  	case "No Card":
  		card.style.backgroundColor = "#ede621";
  		card.innerHTML = "Yellow";
  		cardinput.selectedIndex = 1;
  	break;
  	case "Yellow":
  		card.style.backgroundColor = "#eb1e1e";
  		card.innerHTML = "Red";
  		cardinput.selectedIndex = 2;
  	break;
  	default:
  		card.style.backgroundColor = "#c0c0c0";
  		card.innerHTML = "No Card";
  		cardinput.selectedIndex = 0;
  	}
}
		
function manualInput() {
	var manual = document.getElementById("manual");
	if (manual.checked) {
		document.getElementById("scouterPosition").className = "preset";
		document.getElementById("Team").className = "preset";
		document.getElementById("Match").className = "preset";
	}
	else {
		document.getElementById("scouterPosition").className = "enable";
		document.getElementById("Team").className = "enable";
		document.getElementById("Match").className = "enable";
	}
}
		
function scoutingPosition() {
	var position = document.getElementById("scouterPosition").value;
	if (position=="R1" || position=="R2" || position=="R3") { document.getElementById("scouterPosition").style.backgroundColor = "#B00"; }
	else { document.getElementById("scouterPosition").style.backgroundColor = "#00B"; }
}

function countUp(button_class) {
	console.log(button_class);
	var buttonColor = button_class;
	switch (buttonColor) {
		case "auto lowGoal right-button":
			var lowgoalAuto = document.getElementById("LowGoals_Auto");
			var lowgoalAutoDisplay = document.getElementById("AutoLowCounter");
			lowgoalAuto.value++;
			lowgoalAutoDisplay.innerHTML++;
		break;
		case "auto outGoal right-button":
			var outgoalAuto = document.getElementById("OutGoals_Auto");
			var outgoalAutoDisplay = document.getElementById("AutoOutCounter");
			outgoalAuto.value++;
			outgoalAutoDisplay.innerHTML++;
		break;
		case "auto inGoal right-button":
			var ingoalAuto = document.getElementById("InGoals_Auto");
			var ingoalAutoDisplay = document.getElementById("AutoInCounter");
			ingoalAuto.value++;
			ingoalAutoDisplay.innerHTML++;
		break;
		default: alert("oh no");
	}
}

function countDown(button_class) {
	console.log(button_class);
	var buttonColor = button_class;
	switch (buttonColor) {
		case "auto lowGoal left-button":
			var lowgoalAuto = document.getElementById("LowGoals_Auto");
			var lowgoalAutoDisplay = document.getElementById("AutoLowCounter");
			if(lowgoalAuto.value > 0) {
				lowgoalAuto.value--;
				lowgoalAutoDisplay.innerHTML--;
			}
		break;
		case "auto outGoal left-button":
			var outgoalAuto = document.getElementById("OutGoals_Auto");
			var outgoalAutoDisplay = document.getElementById("AutoOutCounter");
			if(outgoalAuto.value > 0) {
				outgoalAuto.value--;
				outgoalAutoDisplay.innerHTML--;
			}
		break;
		case "auto inGoal left-button":
			var ingoalAuto = document.getElementById("InGoals_Auto");
			var ingoalAutoDisplay = document.getElementById("AutoInCounter");
			if(ingoalAuto.value > 0) {
				ingoalAuto.value--;
				ingoalAutoDisplay.innerHTML--;
			}
		break;
		default: alert("oh no");
	}
}
		
function rotateOn() {
	var button = document.getElementById("rotate");
	var buttonColor = button.style.backgroundColor;
	var checkbox = document.getElementById("CRotate");
	if (checkbox.checked) {
		button.style.backgroundColor = "#eee";
		button.style.color = "black";
		checkbox.checked = false;
	}
	else {
		button.style.backgroundColor = "#2bc23f";
		button.style.color = "white";
		checkbox.checked = true;
	}
}
		
function positionOn() {
	var button = document.getElementById("position");
	var buttonColor = button.style.backgroundColor;
	var checkbox = document.getElementById("CPosition");
	if (checkbox.checked) {
		button.style.backgroundColor = "#eee";
		button.style.color = "black";
		checkbox.checked = false;
	}
	else {
		button.style.backgroundColor = "#2bc23f";
		button.style.color = "white";
		checkbox.checked = true;
	}
}
		
function resetEverything() {
	var rcButton = document.getElementById("rotate");
	var pcButton = document.getElementById("position");
	var sPosition = document.getElementById("scouterPosition").value;
	var card = document.getElementById("cards");
	if (sPosition=="R1" || sPosition=="R2" || sPosition=="R3") { document.getElementById("scouterPosition").style.backgroundColor = "#B00"; }
	else { document.getElementById("scouterPosition").style.backgroundColor = "#00B"; }
	rcButton.style.backgroundColor = "#eee";
	rcButton.style.color = "black";
	pcButton.style.backgroundColor = "#eee";
	pcButton.style.color = "black";
	card.style.backgroundColor = "#c0c0c0";
}
		
function getData() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const name = urlParams.get('scouter');
	const match = urlParams.get('match');
	var scouter = document.getElementById("Scouter");
	scouter.value = name;
	var matchnum = document.getElementById("Match");
	matchnum.value = match;
}