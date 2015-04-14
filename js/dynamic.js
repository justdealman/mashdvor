function startPage() {
	var h = $('.introduction').height();
	var zoom = 1;
	if ( h < 822 ) {
		zoom = h/822;
		h = 822;
	}
	$('.introduction > div').css({
		'zoom': zoom,
		'height': h+'px'
	});
}
$(document).ready(function() {
	if ( $('.introduction').length > 0 ) {
		startPage();
	}
});
$(window).resize(function() {
	if ( $('.introduction').length > 0 ) {
		startPage();
	}
});