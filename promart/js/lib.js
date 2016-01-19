function changeContent (elSelector, url, heading) {
	var baseUrl = "partials/";
	$(elSelector).click(function(){
		$.ajax({
			url: baseUrl + url,
			cache: false,
			success: function(html){
				$("#content").html(html);
			}
		});
		$('div.main').html('<h1>' + heading + '</h1>');
		$('div.parent').html(' ');
	});
}
