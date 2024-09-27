var winclicks = 0;
var loseclicks = 0;
var innercount = 0;

var winBtn = document.getElementById("wBtn");
var failBtn = document.getElementById("fBtn");

function onClickWin() {
	winclicks += 1;
	document.getElementById("winclicks").innerHTML = winclicks;
	active = active + 1 < items.length ?  active + 1 : active;
    loadShow();
    winBtn.style.backgroundColor = '#996c00';
    setTimeout(() => {
    	winBtn.style.backgroundColor = '#FFB401';  
	}, 100)
};


function onCLickLose() {
	loseclicks += 1;
	innercount += 1;
	document.getElementById("loseclicks").innerHTML = loseclicks;
	if(innercount == 3) {
		active = active + 1 < items.length ?  active + 1 : active;
		innercount -= 3;
	};
    loadShow();
    failBtn.style.backgroundColor = '#991d00';
    setTimeout(() => {
    	failBtn.style.backgroundColor = '#FF3101';  
	}, 100)
}
