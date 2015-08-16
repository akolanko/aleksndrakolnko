$(document).ready(function() {

$("#img01").delay(1000).fadeIn(2000);
$("#img02").delay(1000).fadeIn(2000);
$("#img03").delay(1000).fadeIn(2000);

var divArrayOne = [];

for (i=1; i <= 4901; i++){
	divArrayOne.push(i);
}

var delayTimeOne = 3000;
var currentDivIndexOne;
var currentDivOne;
var divIndexOne;
var minIndexOne = 0;
var maxIndexOne;

function getRandomOne(min, max) {
	currentDivIndexOne = Math.floor(Math.random() * (max - min + 1)) + min; /*random number between min (inclusive) and max (inclusive) */
}

for (i=1; i <=4901; i++){

	maxIndexOne = divArrayOne.length - 1;

	getRandomOne(minIndexOne, maxIndexOne);

	currentDivOne = divArrayOne[currentDivIndexOne];

	$("#div" + currentDivOne).delay(delayTimeOne).animate({opacity: 1}, 20000);

	delayTimeOne = delayTimeOne + 2;

	if (currentDivIndexOne > -1){
		divArrayOne.splice(currentDivIndexOne, 1);
	}

}


var divArrayTwo = [];

for (i=4902; i <= 9802; i++){
	divArrayTwo.push(i);
}

var delayTimeTwo = 3000;
var currentDivIndexTwo;
var currentDivTwo;
var divIndexTwo;
var minIndexTwo = 0;
var maxIndexTwo;

function getRandomTwo(min, max) {
	currentDivIndexTwo = Math.floor(Math.random() * (max - min + 1)) + min; /*random number between min (inclusive) and max (inclusive) */
}

for (i=4902; i <=9802; i++){

	maxIndexTwo = divArrayTwo.length - 1;

	getRandomTwo(minIndexTwo, maxIndexTwo);

	currentDivTwo = divArrayTwo[currentDivIndexTwo];

	$("#div" + currentDivTwo).delay(delayTimeTwo).animate({opacity: 1}, 20000);

	delayTimeTwo = delayTimeTwo + 2;

	if (currentDivIndexTwo > -1){
		divArrayTwo.splice(currentDivIndexTwo, 1);
	}

}


var divArrayThree = [];

for (i=9803; i <= 14703; i++){
	divArrayThree.push(i);
}

var delayTimeThree = 3000;
var currentDivIndexThree;
var currentDivThree;
var divIndexThree;
var minIndexThree = 0;
var maxIndexThree;

function getRandomThree(min, max) {
	currentDivIndexThree = Math.floor(Math.random() * (max - min + 1)) + min; /*random number between min (inclusive) and max (inclusive) */
}

for (i=9803; i <=14703; i++){

	maxIndexThree = divArrayThree.length - 1;

	getRandomThree(minIndexThree, maxIndexThree);

	currentDivThree = divArrayThree[currentDivIndexThree];

	$("#div" + currentDivThree).delay(delayTimeThree).animate({opacity: 1}, 20000);

	delayTimeThree = delayTimeThree + 2;

	if (currentDivIndexThree > -1){
		divArrayThree.splice(currentDivIndexThree, 1);
	}

}

$("#arrow").delay(30000).show(1000);

});