$(document).ready( function (){

	var $mouseX1 = 0, $mouseY1 = 0;
	var $mouseX2 = 0, $mouseY2 = 0;
	var $mouseX3 = 0, $mouseY3 = 0;
	var $mouseX4 = 0, $mouseY4 = 0;
	var $mouseX5 = 0, $mouseY5 = 0;
	var $mouseX6 = 0, $mouseY6 = 0;
	var $x1 = 0, $y1 =0;
	var $x2 = 0, $y2 =0;
	var $x3 = 0, $y3 =0;
	var $x4 = 0, $y4 =0;
	var $x5 = 0, $y5 =0;
	var $x6 = 0, $y6 =0;

	$(document).mousemove(function(e){
		$mouseX1 = e.pageX + 20;
		$mouseY1 = e.pageY + 40;
		$mouseX2 = e.pageX + 110;
		$mouseY2 = e.pageY + 68;
		$mouseX3 = e.pageX + 200;
		$mouseY3 = e.pageY + 66;
		$mouseX4 = e.pageX + 290;
		$mouseY4 = e.pageY + 58;
		$mouseX5 = e.pageX + 380;
		$mouseY5 = e.pageY + 80;
		$mouseX6 = e.pageX + 470;
		$mouseY6 = e.pageY + 105;
		$("#arrow").show(1000);
	});

	var $loop = setInterval(function(){
	// change 12 to alter damping higher is slower
		$x1 += (($mouseX1 - $x1)/6);
		$y1 += (($mouseY1 - $y1)/6);
		$x2 += (($mouseX2 - $x2)/9);
		$y2 += (($mouseY2 - $y2)/9);
		$x3 += (($mouseX3 - $x3)/12);
		$y3 += (($mouseY3 - $y3)/12);
		$x4 += (($mouseX4 - $x4)/15);
		$y4 += (($mouseY4 - $y4)/15);
		$x5 += (($mouseX5 - $x5)/18);
		$y5 += (($mouseY5 - $y5)/18);
		$x6 += (($mouseX6 - $x6)/21);
		$y6 += (($mouseY6 - $y6)/21);
		$("#img01").css({left:$x1 +'px', top:$y1 +'px'});
		$("#img02").css({left:$x2 +'px', top:$y2 +'px'});
		$("#img03").css({left:$x3 +'px', top:$y3 +'px'});
		$("#img04").css({left:$x4 +'px', top:$y4 +'px'});
		$("#img05").css({left:$x5 +'px', top:$y5 +'px'});
		$("#img06").css({left:$x6 +'px', top:$y6 +'px'});
	}, 30);

});