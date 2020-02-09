function setup() {
	var lowgoalAuto = document.getElementById("lowgoalAuto").innerHTML = 0;
	var outgoalAuto = document.getElementById("outgoalAuto").innerHTML = 0;
	var ingoalAuto = document.getElementById("ingoalAuto").innerHTML = 0;
	var lowgoalTeleop = 0;
	var outgoalTeleop = 0;
	var ingoalTeleop = 0;
	var fouls = document.getElementById("fouls").innerHTML = 0;
	var techFouls = document.getElementById("techFouls").innerHTML = 0;
}

function changeCounter(button_id, button_class) {
	//alert(button_id);
	//alert(button_class);
	var buttonType = button_id;
	var buttonColor = button_class;
	//button classes are yellow/red/blue auto/teleop, gray1, and gray2
	switch (buttonColor) {
		case "yellow auto":
			var lowgoalAuto = document.getElementById("lowgoalAuto");
			if (buttonType=="right-button") lowgoalAuto.innerHTML++;
			else if (lowgoalAuto.innerHTML > 0) lowgoalAuto.innerHTML--;
		break;
		case "red auto":
			var outgoalAuto = document.getElementById("outgoalAuto");
			if (buttonType=="right-button") outgoalAuto.innerHTML++;
			else if (outgoalAuto.innerHTML > 0) outgoalAuto.innerHTML--;
		break;
		case "blue auto":
			var ingoalAuto = document.getElementById("ingoalAuto");
			if (buttonType=="right-button") ingoalAuto.innerHTML++;
			else if (ingoalAuto.innerHTML > 0) ingoalAuto.innerHTML--;
		break;
		case "gray1":
			var fouls = document.getElementById("fouls");
			if (buttonType=="top-button") fouls.innerHTML++;
			else if (fouls.innerHTML > 0) fouls.innerHTML--;
		break;
		case "gray2":
			var techFouls = document.getElementById("techFouls");
			if (buttonType=="top-button") techFouls.innerHTML++;
			else if (techFouls.innerHTML > 0) techFouls.innerHTML--;
		break;
		default: alert("oh no");
	}
}

function cardChange() {
 var card = document.getElementById("cards");
  switch (card.innerHTML) {
  	case "No Card":
  		card.style.backgroundColor = "#ede621";
  		card.innerHTML = "Yellow";
  	break;
  	case "Yellow":
  		card.style.backgroundColor = "#eb1e1e";
  		card.innerHTML = "Red";
  	break;
  	default:
  		card.style.backgroundColor ="#c0c0c0";
  		card.innerHTML = "No Card";
  }
}

window.onload = setup;
