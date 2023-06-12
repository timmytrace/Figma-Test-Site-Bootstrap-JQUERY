$(document).ready(function() {
    // Handle form submission
    $('#messageForm').submit(function(e) {
      e.preventDefault();
      var message = $('#messageInput').val();
      if (message.trim() !== '') {
        $('.message-container').append('<div class="alert alert-success" role="alert">' + message + '</div>');
        $('#messageInput').val('');
      }
    });
  });