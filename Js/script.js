$(document).ready(function() {
	var movementStrength = 30;
	var movementStrengthMenu = 15;
	var width = movementStrength / $(window).width();
	var height = movementStrength / $(window).height();
	var heightMenu = movementStrengthMenu / $(window).height();
	var widthMenu = movementStrengthMenu / $(window).width();	
	var pageX, pageY;
  
  

	function move() {
		var newvalueX = width * pageX * -1;
		var newvalueY = height * pageY * -1;
		var newvalueXMenu = widthMenu * pageX * -1;
		var newvalueYMenu = heightMenu * pageY * -1;
		$('.background').css('transform' , 'translate(' + newvalueX + 'px,' + newvalueY + 'px)');
		$('.menu').css('transform' , 'translate(' + newvalueXMenu + 'px,' + newvalueYMenu + 'px) perspective(800px) rotateY(190deg) rotateX(540deg) rotateZ(175deg)');
	}
  
  
	
	$("html").mousemove(function(e){
		pageX = e.pageX - ($(window).width() / 2);
		pageY = e.pageY - ($(window).height() / 2);
		window.requestAnimationFrame(move);
	});
});