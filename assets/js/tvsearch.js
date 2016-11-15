var searchUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/search/title/';
var tvIdUrl = 'https://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/show/';
var showParams = '/episodes/all/1/100/';
var webContent = '/web/true';
var checkStr = '';

// clear search results when clear button is hit
$('#resetbutton').on('click', function() {
    $('.results').empty();
    $('#searchbar').text() = '';

});



// When form is submitted get values
$('#submitbutton').on('click', function() {
    event.preventDefault();
    $('.results').empty();
    var title = $('#searchbar').val();
    console.log(title);

    // get check box values
    var checkValues = [];

    $.each($('input[type=checkbox]:checked'), function() {
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
                '<div class="card-image"> <img src="' + data.results[i].artwork_608x342 + '"/>' +
                '</div></div>' +
                '</li>');
        }
    })
})



 $('.results').on('click', 'li', function(event) {
    $('.results').empty();
    var selected = $(this).attr('id');
    console.log(selected);
  var showinfo = $.get(tvIdUrl + selected, function(data,newStr) {
            $('.results').append('<div>' +
                '<img src="' + data.banner + '"/>' +
                '<h1>' + data.title + '</h1>' +
                '<p>' + data.overview + '</p>' +
                '</div>');

              });

           $.get(tvIdUrl + selected + showParams + checkStr + webContent,function(data) {
               console.log(data.results[1].title, data.results[1].subscription_web_sources[0].link);


         })


})
