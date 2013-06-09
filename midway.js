$(document).ready(function() {
	var midwayH = $('.centerHorizontal').css('marginLeft', - + $('.centerHorizontal').width()/2);
	var midwayV = $('.centerVertical').css('marginTop', - + $('.centerVertical').height()/2);

	midwayH;
	midwayV;

	$(".centerHorizontal").css({
		'position' : 'absolute',
		'top' : '50%',
		'left' : '50%'
	});
	
	$(window).resize(function() {
		var midwayH = $('.centerHorizontal').css('marginLeft', - + $('.centerHorizontal').width()/2);
	var midwayV = $('.centerVertical').css('marginTop', - + $('.centerVertical').height()/2);

		midwayH;
		midwayV;
	});
	
});
