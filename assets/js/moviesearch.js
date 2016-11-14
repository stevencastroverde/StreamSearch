var searchUrl = 'http://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/search/movie/title/';
var tvIdUrl = 'http://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/movie/';
var movieParams = '/1/100/';
var webContent = '/web';
var checkStr = '';

// clear search results when clear button is hit
$('#resetbutton').on('click', function() {
    $('.results').empty();
    $('#searchbar').text('');
    $(':checkbox').attr('checked', false);

});


// When form is submitted get values
$('#submitbutton').on('click', function() {
    event.preventDefault();
    var title = $('#searchbar').val();


    // get check box values
    var checkValues = [];

    $.each($('input[name="subscritptions"]:checked'), function() {
        checkValues.push($(this).val());
        return checkStr = checkValues.join(',');
    });
    console.log(checkStr);

    // Display all shows with title matches
    $.get(searchUrl + title, function(data) {
        console.log(data);
        for (var i = 0; i < data.results.length; ++i) {
            $('.results').append('<li class="col l4 m6 s12 row"' + 'id ="' + data.results[i].id + '">' +
                '<div class="card">' +
                // '<span class="card-title">' + data.results[i].title + '</span>' +
                '<div class="card-image"> <img src="' + data.results[i].poster_240x342 + '"/>' +
                '</div></div>' +
                '</li>');
        }
    })
})



$('.results').on('click', 'li', function(event) {
    $('.results').empty();
    var selected = $(this).attr('id');
    console.log(selected);
    $.get(tvIdUrl + selected, function(data) {
            $('.results').append('<div class="row">' +
                '<img class="col s12 m6" src="' + data.poster_400x570 + '"/>' +
                '<h1 class=" col s12 m6 ">' + data.title + '</h1>' +
                +'<h2 class=" col s12 m6  ">' + data.release_year + '</h2>' +
                '<p class="col s12 m6  ">' + data.overview + '</p>' +
                '</div>');
            //     return tvIdUrl + selected + showParams + 'hulu_plus' + webContent;
            //     $.then(function() {
            //         console.log(data.results[0].title);
        })
          $.then()
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
