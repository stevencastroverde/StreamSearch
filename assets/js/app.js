var searchUrl = 'http://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/search/title/';
var tvIdUrl = 'http://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/show/';

// $.get(baseUrl , searchContent)
$('#submitbutton').on('click', function() {
    event.preventDefault();
    var title = $('#searchbar').val();
		console.log(title);

		$.get(searchUrl +title , function (data){
			console.log(data);
			for (var i = 0; i < data.results.length; ++i){
				$('.results').append('<div>'
					+  '<h3>' + data.results[i].title + ' ' +  data.results[i].id + '</h3>'
					+	'<img src="' + data.results[i].artwork_304x171 + '"/>'
						+ '<hr />'
							+ '</div>');

	$('.results div').on('click', function(){
		var selected = $('this').event.data;
		console.log(selected);

	})


}



		})













	})
