var winclicks = 0;
var loseclicks = 0;

function onClickWin() {
	winclicks += 1;
	document.getElementById("winclicks").innerHTML = winclicks;
	$('.front').toggleClass('front_flip');
	$('.back').toggleClass('back_flip');
	setTimeout(() => {
		document.getElementById("qt").innerHTML = question;
	}, 1000);
};

function onCLickLose() {
	loseclicks += 1;
	document.getElementById("loseclicks").innerHTML = loseclicks;
	$('.front').toggleClass('front_flip');
	$('.back').toggleClass('back_flip');
	setTimeout(() => {
		document.getElementById("qt").innerHTML = question;
	}, 1000);
}

