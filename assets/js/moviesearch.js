$(document).ready(function(){
	 $('.tooltipped').tooltip({delay: 50});




var searchUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/search/movie/title/';
var movieIdUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/movie/';
var movieParams = '/1/100/';
var webContent = '/web';
var subscritptions = '';

// clear search results when clear button is hit
$('#resetbutton').on('click', function() {
    $('.results').empty();
    $('#searchbar').val('');

});













// When form is submitted get values
$('#submitbutton').on('click', function() {
    event.preventDefault();
    var title = $('#searchbar').val();
    console.log(title);



    // Display all shows with title matches
    $.get(searchUrl + title, function(data) {
        console.log(data);
        for (var i = 0; i < data.results.length; ++i) {
            $('.results').append('<li class="col l4 m6 s12 row hoverable"' + 'id ="' + data.results[i].id + '">' +
                '<div class="card">' +
                // '<span class="card-title">' + data.results[i].title + '</span>' +
                '<div class="card-image"> <img src="' + data.results[i].poster_240x342 + '"/>' +
                '</div></div>' +
                '</li>');
        }
    })
})



$('.results').on('click','li', function(event) {
    $('.results').empty();
    var selected = $(this).attr('id');
    console.log(selected);
    $.get(movieIdUrl + selected, function(data) {
        console.log(data);
        $('.results').append('<div class="row movie_poster">' +
            '<img class="col s12 m6" src="' + data.poster_400x570 + '"/>' +
            '<h1 class=" col s12 m6 ">' + data.title + '</h1>' +
          + '<h2 class=" col s12 m6  ">' + data.release_year + '</h2>'
          +  '<p class="col s12 m6  ">' + data.overview + '</p>' +
            '</div>');
              var webSources = data.subscription_web_sources
            for (var i = 0; i < webSources.length; i++){
              if (webSources[i].display_name === "Hulu"){
                $('.movie_poster').append('<a class=" col s1 class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="Watch on Hulu"  href="' + webSources[i].link + '"><img height="48px" src="assets/img/hulu.svg" /></a>')
              } else if (webSources[i].display_name === "Netflix"){
                $('.movie_poster').append('<a class=" col s1 class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="Watch on Netflix" href="' + webSources[i].link + '"><img   height="48px" src="assets/img/netflix.svg"/></a>')
              } else {
								$('.movie_poster').append('<a class=" col s1 class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="Watch on Amazon" href="' + webSources[i].link + '"><img height="48px" src="assets/img/amazon.svg"/></a>')

							}


            }
        })
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // })


})
 });
