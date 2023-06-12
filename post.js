$(document).ready(function () {
    $('.like-btn').click(function () {
        $(this).toggleClass('liked');
        var buttonText = $(this).text();
        $(this).text(buttonText === 'Like' ? 'Unlike' : 'Like');
    });
});

$(document).ready(function () {
    $('.like-btn-2').click(function () {
        $(this).toggleClass('liked');
        var buttonText = $(this).text();
        $(this).text(buttonText === 'Like' ? 'Unlike' : 'Like');
    });
});

$(document).ready(function () {
    $('.like-btn-3').click(function () {
        $(this).toggleClass('liked');
        var buttonText = $(this).text();
        $(this).text(buttonText === 'Like' ? 'Unlike' : 'Like');
    });
});


$(document).ready(function () {
    $('.comment-btn').click(function () {
        $(this).next('.comments').slideToggle();
    });
});

$(document).ready(function() {
    $('.share-btn').click(function() {
      // Perform the share functionality
      alert("Share button clicked!");
    });
  });  
  
  