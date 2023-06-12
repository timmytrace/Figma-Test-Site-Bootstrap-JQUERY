$(window).on('scroll', function() {
    // Check if the user has reached the bottom of the page
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      // Load more posts
      loadMorePosts();
    }
  });
  
  function loadMorePosts() {
    // Make an AJAX request to fetch new posts
    $.ajax({
      url: 'your-server-url', // Replace with your server URL to fetch the new posts
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        // Iterate through the response and append each post to the container
        response.posts.forEach(function(post) {
          var template = $('#post-template').html(); // Get the post template
          var html = Mustache.render(template, post); // Render the template with the post data
          $('#post-container').append(html); // Append the rendered HTML to the container
        });
      },
      error: function(xhr, status, error) {
        // Handle the error
      }
    });
  }
  