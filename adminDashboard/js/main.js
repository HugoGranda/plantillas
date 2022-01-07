var menu = $('.navigation li');
$(document).ready(function() {
	

	console.log(menu);
	$.each(menu, function(i, item) {
		$(item).mouseover(function(event) {
			activarLink(this);
		});
	});
});

function activarLink(obj) {
	$.each(menu, function(i, item) {
		$(item).removeClass('hovered');
		console.log($(item));
	});
	$(obj).addClass('hovered');
}

/*Menu Toggle*/

var toggle = $('.toggle');
var navigation = $('.navigation');
var main = $('.main');

$('.toggle').click(function(event) {
	navigation.toggleClass('active');
	main.toggleClass('active');
	
});