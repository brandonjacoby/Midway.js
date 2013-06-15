function Midway() {
	$('.centerHorizontal').css('marginLeft', - + $('.centerHorizontal').width()/2);
	$('.centerVertical').css('marginTop', - + $('.centerVertical').height()/2);

	$(".centerHorizontal").css({
		'position' : 'absolute',
		'top' : '50%',
		'left' : '50%'
	});

	$(".centerVertical").css({
		'position' : 'absolute',
		'top' : '50%',
		'left' : '50%'
	});
}

$(document).ready(function() {
	Midway();
	$(window).on('resize', Midway);
});