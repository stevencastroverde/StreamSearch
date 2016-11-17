var searchUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/search/movie/title/';
var movieIdUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/movie/';
var checkValues = null;
var resultsDiv = $('.results');


// clear search results when clear button is hit
$('#resetbutton').on('click', function() {
    resultsDiv.empty();
    $('#searchbar').val('');

});


// When form is submitted get values
$('#submitbutton').on('click', function() {
    event.preventDefault();
    resultsDiv.empty();
    var title = $('#searchbar').val();
    console.log(title);

    var checkValues = [];

		$.each($('input[type=checkbox]:checked'), function() {
				checkValues.push($(this).val());
        return checkValues;
		});


		console.log(checkValues)
    // Display all shows with title matches
    $.get(searchUrl + title, function(data) {
        console.log(data);
        for (var i = 0; i < data.results.length; ++i) {
            resultsDiv.append('<li class="col l4 m6 s12 row hoverable"' + 'id ="' + data.results[i].id + '">' +
                '<div class="card">' +
                // '<span class="card-title">' + data.results[i].title + '</span>' +
                '<div class="card-image"> <img src="' + data.results[i].poster_240x342 + '"/>' +
                '</div></div>' +
                '</li>');
        }
    })
})



resultsDiv.on('click', 'li', function() {
    resultsDiv.empty();
    var selected = $(this).attr('id');
    console.log(selected);
    $.get(movieIdUrl + selected, function(data,checkValues) {
            console.log(checkValues);
            resultsDiv.append('<div class="row movie_poster">' +
                '<img class="col s12 m6" src="' + data.poster_400x570 + '"/>' +
                '<h3 class=" grey-text text-darken-4 col s12 m6 ">' + data.title + '</h3>'
                 + '<h4 class=" col s12 m6 grey-text text-darken-1  ">' + data.release_year + '</h4>'
              +  '<p class="col s12 m6 grey-text text-darken-1  ">' + data.overview + '</p>'
               + '<p id="link"></p>'
							+ '</div>');

										if (data.subscription_web_sources.length > 0){
										$('#link').append('<a class="lime-text" href="' + data.subscription_web_sources[0].link + '">Watch Now</a>')

							 		} else {
							 			$('#link').append('<h4 class=" grey-text text-darken-4 col s12 m6 "> Sorry the subscriptions you use do not have this movie</h4>');


                	}
							 	})
							 }




        )
