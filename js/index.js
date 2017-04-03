var arr = [];
function getPhotos() {
  $.ajax({
  url: 'https://jsonplaceholder.typicode.com/photos/',
type: 'GET',
success: function(data) {
    console.log(data);
arr = data.slice(0,5);
$('img').attr('src', arr[0].url);
    
},
error: function(data) {
}
})
}

getPhotos();


$('.pagination li:first').addClass('active');
$('.pagination li').click(function() {
            $('.pagination li').removeClass('active');
            $(this).addClass('active');
            var page = $(this).find('a').text();
            var url = arr[page-1].url;
            $('img').attr('src', url);
});