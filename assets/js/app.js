var searchUrl = 'http://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/search/title/';
var tvIdUrl = 'http://api-public.guidebox.com/v1.43/US/rKcE8UjpWG7r8hIkG3Dus9HltJxmoYxp/show/';
var showParams = '/episodes/all/1/100/';
var webContent = '/web/true';


// clear search results when clear button is hit
$('#resetbutton').on('click', function (){
  $('.results').empty();

});



// When form is submitted get values
$('#submitbutton').on('click', function () {
    event.preventDefault();
    var title = $('#searchbar').val();
		console.log(title);



// Display all shows with title matches
		$.get(searchUrl + title , function (data){
			console.log(data);
			for (var i = 0; i < data.results.length; ++i){
				$('.results').append('<section' + ' id ="' + data.results[i].id +'">'
					+  '<h3>' + data.results[i].title + ' ' +  data.results[i].id + '</h3>'
					+	'<img src="' + data.results[i].artwork_304x171 + '"/>'
						+ '<hr />'
							+ '</section>');
	}
})
})



$('.results').on('click','section', function (event){
  $('.results').empty();
  var selected = $(this).attr('id');
  $.get(tvIdUrl + selected , function(data){
    $('.results').append('<div>'
      + '<img src="' + data.banner + '"/>'
      + '<h1>' + data.title + '</h2>'
      + '<p>' + data.overview + '</p>'
+ '</div>'  );
return tvIdUrl + selected + showParams + 'hulu_plus' + webContent;
$.then(function (){
     console.log( data.results[0].title );
})













  })


})
