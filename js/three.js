$(document).ready(function() {

	var mq = window.matchMedia("(max-width: 480px)");
	var mqT = window.matchMedia("(max-width: 768px)");

		if (mq.matches) {

			$('#circle-gif-2').click(function () {

				var dwidth1 = 150;
				widthIncrease1 = 0;

				widthIncrease1 = setInterval(function(){
					dwidth1 +=1;
					document.getElementById('circle-gif-1').style.width = dwidth1+'px';
					document.getElementById('circle-gif-1').style.marginLeft = (320-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginRight = (320-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginTop = (280-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginBottom = (280-dwidth1)/2+'px';
				}, 10);

				setTimeout(function(){
					clearInterval(widthIncrease1);
				}, 1300);

				$("#arrow").show(1000);
				return false;

			});

			$('#circle-gif-1').click(function () {

				var dwidth2 = 150;
				widthIncrease2 = 0;

				widthIncrease2 = setInterval(function(){
					dwidth2 +=1;
					document.getElementById('circle-gif-2').style.width = dwidth2+'px';
					document.getElementById('circle-gif-2').style.marginLeft = (320-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginRight = (320-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginTop = (280-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginBottom = (280-dwidth2)/2+'px';
				}, 10);

				setTimeout(function(){
					clearInterval(widthIncrease2);
				}, 1300);

				$("#arrow").show(1000);
				return false;

			});

		} else if (mqT.matches){

			$('#circle-gif-2').click(function () {

				var dwidth1 = 150;
				widthIncrease1 = 0;

				widthIncrease1 = setInterval(function(){
					dwidth1 +=1;
					document.getElementById('circle-gif-1').style.width = dwidth1+'px';
					document.getElementById('circle-gif-1').style.marginLeft = (350-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginRight = (350-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginTop = (750-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginBottom = (750-dwidth1)/2+'px';
				}, 10);

				setTimeout(function(){
					clearInterval(widthIncrease1);
				}, 1800);

				$("#arrow").show(1000);
				return false;

			});

			$('#circle-gif-1').click(function () {

				var dwidth2 = 150;
				widthIncrease2 = 0;

				widthIncrease2 = setInterval(function(){
					dwidth2 +=1;
					document.getElementById('circle-gif-2').style.width = dwidth2+'px';
					document.getElementById('circle-gif-2').style.marginLeft = (350-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginRight = (350-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginTop = (750-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginBottom = (750-dwidth2)/2+'px';
				}, 10);

				setTimeout(function(){
					clearInterval(widthIncrease2);
				}, 1800);

				$("#arrow").show(1000);
				return false;

			});

		} else {

			$('#circle-gif-3').click(function () {

				var dwidth1 = 150;
				widthIncrease1 = 0;

				widthIncrease1 = setInterval(function(){
					dwidth1 +=1;
					document.getElementById('circle-gif-1').style.width = dwidth1+'px';
					document.getElementById('circle-gif-1').style.marginLeft = (400-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginRight = (400-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginTop = (600-dwidth1)/2+'px';
					document.getElementById('circle-gif-1').style.marginBottom = (600-dwidth1)/2+'px';
				}, 10);

				setTimeout(function(){
					clearInterval(widthIncrease1);
				}, 2000);

				$("#arrow").show(1000);
				return false;

			});

			$('#circle-gif-1').click(function () {

				var dwidth2 = 150;
				widthIncrease2 = 0;

				widthIncrease2 = setInterval(function(){
					dwidth2 +=1;
					document.getElementById('circle-gif-2').style.width = dwidth2+'px';
					document.getElementById('circle-gif-2').style.marginLeft = (400-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginRight = (400-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginTop = (600-dwidth2)/2+'px';
					document.getElementById('circle-gif-2').style.marginBottom = (600-dwidth2)/2+'px';
				}, 10);

				setTimeout(function(){
					clearInterval(widthIncrease2);
				}, 2000);

				$("#arrow").show(1000);
				return false;

			});

			$('#circle-gif-2').click(function () {

				var dwidth3 = 150;
				widthIncrease3 = 0;

				widthIncrease3 = setInterval(function(){
					dwidth3 +=1;
					document.getElementById('circle-gif-3').style.width = dwidth3+'px';
					document.getElementById('circle-gif-3').style.marginLeft = (400-dwidth3)/2+'px';
					document.getElementById('circle-gif-3').style.marginRight = (400-dwidth3)/2+'px';
					document.getElementById('circle-gif-3').style.marginTop = (600-dwidth3)/2+'px';
					document.getElementById('circle-gif-3').style.marginBottom = (600-dwidth3)/2+'px';
				}, 10);

				setTimeout(function(){
					clearInterval(widthIncrease3);
				}, 2000);

				$("#arrow").show(1000);
				return false;

			});
		}
});