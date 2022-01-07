

$(document).ready(function() {
	
var el = $('#wrapper');
var toggleButton = $('#menu-toggle');
	toggleButton.click(function(event) {
		$(el).toggleClass('toggled');
	
	});		
});