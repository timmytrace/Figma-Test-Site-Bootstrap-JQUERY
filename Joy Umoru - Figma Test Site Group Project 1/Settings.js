$(document).ready(function() {
  // Get the form element
  var form = $('form');

  // Attach a submit event handler to the form
  form.submit(function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Perform your save changes logic here
    // For demonstration purposes, let's simulate a delay of 2 seconds
    setTimeout(function() {
      // Show a success message or perform any other action
      $('#saveMessage').text('Changes saved successfully!').show().fadeOut(3000);
    }, 2000);
  });
});

  