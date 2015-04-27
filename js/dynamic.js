function startPage() {
	var h = $('.introduction').height();
	var zoom = 1;
	if ( h < 822 ) {
		zoom = h/822;
		h = 822;
	}
	$('.introduction > div').css({
		//'zoom': zoom,
		'height': h+'px',
		'-webkit-transform': 'scale('+zoom+')',
		'-webkit-transform-origin': 'center top',
		'-moz-transform': 'scale('+zoom+')',
		'-moz-transform-origin': 'center top',
		'transform': 'scale('+zoom+')',
		'transform-origin': 'center top'
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