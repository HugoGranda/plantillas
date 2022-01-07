$(document).ready(function() {
	// var myOffcanvasMenu = document.getElementById('offcanvasMenu')
	// var bsOffcanvasMenu = new bootstrap.Offcanvas(myOffcanvasMenu)
	// var el = $('#wrapper');
	var toggleButton = $('#menu-toggle');
	toggleButton.click(function(event) {
		$('#offcanvasMenu').toggleClass('sidebar-nav');
		$('#offcanvasMenu').toggleClass('sidebar-nav-off');
		// $('main');
		// $('#offcanvasMenu').toggle(function() {
			// $('main').css('margin-left', '0').fadeTo('slow');
		// }, function() {
			/* Stuff to do every *even* time the element is clicked */
		// });
		
		// $('main').css('margin-left', '0');
		if ($('#offcanvasMenu').hasClass('sidebar-nav')) {
			// $('main').css('margin-left', '270px');
			$('main').css({
				'margin-left': '270px',
				'transition': '0.5s'
			});
		}else{
			// $('main').css('margin-left', '0');
			$('main').css({
				'margin-left': '0',
				'transition': '0.5s'
			});
		}
	});

	// var ventana_ancho = $(window).width();
	
	$(window).resize(function(event) {
		var ventana_ancho = $(window).width();
		if (ventana_ancho<=992) {
			console.log(ventana_ancho);
			$('main').css({
				'margin-left': '0',
				'transition': '0.5s'
			});
		}else{
			$('main').css({
				'margin-left': '270px',
				'transition': '0.5s'
			});
		}
	});
});