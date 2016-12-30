var searchUrl = 'http://localhost:3000/movie/search';
var movieIdUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/movie/';
var checkValues = [];
var resultsDiv = $('.results');
var firstcall = new API(searchUrl);


function API(Url) {
      this.data = null;
    this.askForData = function(Data, callback) {
        $.ajax({
            type: 'GET',
            url : Url,
            data: Data,
            dataType: 'json'
          })
          .done(function(info) {

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



}
var checkedboxes = function(checkValues) {
    $.each($('input[type=checkbox]:checked'), function() {
        checkValues.push($(this).val());
        return checkValues;

    });

};

// clear search results when clear button is hit
$('#resetbutton').on('click', function() {
    resultsDiv.empty();


});


// When form is submitted get values
$('#submitbutton').on('click', function() {
    event.preventDefault();
    resultsDiv.empty();
    let formData = {
      'title': $('#searchbar').val(),
      'subscriptions': (checkedboxes(checkValues))


    }
    console.log('sending request', formData);
    firstcall.askForData(formData,printMovies);
});



resultsDiv.on('click', 'li', function() {
    resultsDiv.empty();
    var selected = $(this).attr('id');
    $.get(movieIdUrl + selected, function(data, checkValues) {
        resultsDiv.append('<div class="row movie_poster">' +
            '<img class="col s12 m6" src="' + data.poster_400x570 + '"/>' +
            '<h3 class=" grey-text text-darken-4 col s12 m6 ">' + data.title + '</h3>' +
            '<h4 class=" col s12 m6 grey-text text-darken-1  ">' + data.release_year + '</h4>' +
            '<p class="col s12 m6 grey-text text-darken-1  ">' + data.overview + '</p>' +
            '<p id="link"></p>' +
            '</div>');

        if (data.subscription_web_sources.length > 0) {
            $('#link').append('<a class="white-text  lime btn center-align" href="' + data.subscription_web_sources[0].link + '">Watch Now</a>')

        } else {
            $('#link').append('<h4 class=" grey-text text-darken-4 col s12 m6 "> Sorry the subscriptions you use do not have this movie</h4>');


        }
    })
})
