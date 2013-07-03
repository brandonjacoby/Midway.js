function Midway() {
	$('.centerHorizontal').css('marginLeft', - + $('.centerHorizontal').width()/2);
	$('.centerVertical').css('marginTop', - + $('.centerVertical').height()/2);

	$(".centerHorizontal").css({
		'display' : 'inline',
		'position' : 'absolute',
		'left' : '50%'
	});

	$(".centerVertical").css({
		'display' : 'inline',
		'position' : 'absolute',
		'top' : '50%',
	});
}

$(window).load(function() {
	Midway();
	$(window).on('resize', Midway);
});
