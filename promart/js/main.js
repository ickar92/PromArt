
$(document).ready(function(){
	//changeContent(elSelector, url, heading)
	changeContent('.screen', 'screen.html', 'Screenshots');
	changeContent('.details', 'details.html', 'Details');
	changeContent('.description', 'description.html', 'Description');
	changeContent('.comments', 'comments.html', 'Comments');


	var navElements = $('.nav');

	navElements.click(function(param) {
		var el = $(this);
		navElements.removeClass('active');
		el.addClass('active');
	});

});