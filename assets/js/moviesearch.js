var searchUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/search/movie/title/';
var movieIdUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/movie/';
	var checkValues = [];
var resultsDiv = $('.results');
var firstCall = new API(searchUrl);
var secondCall = new API(movieIdUrl);

function API(url) {
	 let data = null;
    this.askForData = function(identifier, callback) {
        $.get(url + identifier, function(info) {
          data = info;
            callback(info);

        })
    }
};

function printMovies(info) {
    for (var i = 0; i < info.results.length; i++) {
      var movie = info.results[i];
        resultsDiv.append('<li class="col l4 m6 s12 row hoverable"' + 'id ="' + movie.id + '">' +
            '<div class="card">' +
            '<span class="card-title truncate">' + movie.title + '</span>' +
            '<div class="card-image"> <img src="' + movie.poster_240x342 + '"/>' +
            '</div></div>' +
            '</li>');
    }
};

function movieDescription(info, checkValues) {
	 var movie = info;
	resultsDiv.append('<div class="row movie_poster">' +
			'<img class="col s12 m6" src="' + movie.poster_400x570 + '"/>' +
			'<h3 class=" grey-text text-darken-4 col s12 m6 ">' + movie.title + '</h3>' +
			'<h4 class=" col s12 m6 grey-text text-darken-1  ">' + movie.release_year + '</h4>' +
			'<p class="col s12 m6 grey-text text-darken-1  ">' + movie.overview + '</p>' +
		 '</div>');


// ***** Still Working on this!!! *******
	// 	 if(movie.subscription_web_sources = 0){
	// 		 resultsDiv.append('<h5>Sorry the Subscriptions you have do not offer this movie</h5>')
	 //
	// 	 }
	// 	 for(var source in movie.subscription_web_sources){
	// 		 if(source = checkValues[0]){
	// 			 resultsDiv.append('<a class="lime btn">Watch Now</a>')
	// 		 }
	// 	 }
	//  }


function checkedBoxes(checkValues) {
  $.each($('input[type=checkbox]:checked'), function() {
        checkValues.push($(this).val());


    });
		return checkValues;
};

// clear search results when clear button is hit
$('#resetbutton').on('click', function() {
    resultsDiv.empty();
    $('#searchbar').val('');

});

// $('#backToSearch').on('click', function(firstCall){
// 	resultsDiv.empty();
// 	for (var i = 0; i < firstCall.data.results.length; i++) {
// 		var movie = firstCall.data.results[i];
// 			resultsDiv.append('<li class="col l4 m6 s12 row hoverable"' + 'id ="' + movie.id + '">' +
// 					'<div class="card">' +
// 					'<span class="card-title truncate">' + movie.title + '</span>' +
// 					'<div class="card-image"> <img src="' + movie.poster_240x342 + '"/>' +
// 					'</div></div>' +
// 					'</li>');
// 	}
//
// })

// When form is submitted get values
$('#submitbutton').on('click', function() {
    event.preventDefault();
    resultsDiv.empty();
    var title = $('#searchbar').val();
    firstCall.askForData(title, printMovies);
});



resultsDiv.on('click', 'li', function() {
	var selected = $(this).attr('id');
		resultsDiv.empty();
		checkedBoxes(checkValues);
    secondCall.askForData(selected, movieDescription);


});
