$(document).ready(function() {

var divArray = [];

for (i=1; i <= 10000; i++){
	divArray.push(i);
}

var delayTime = 0;
var currentDivIndex;
var currentDiv;
var divIndex;
var minIndex = 0;
var maxIndex;

function getRandom(min, max) {
	currentDivIndex = Math.floor(Math.random() * (max - min + 1)) + min; /*random number between min (inclusive) and max (inclusive) */
}

for (i=1; i <=10000; i++){

	maxIndex = divArray.length - 1;

	getRandom(minIndex, maxIndex);

	currentDiv = divArray[currentDivIndex];

	$("#div" + currentDiv).delay(delayTime).animate({opacity: 1}, 1000);

	delayTime = delayTime + 5;

	if (currentDivIndex > -1){
		divArray.splice(currentDivIndex, 1);
	}

}

});