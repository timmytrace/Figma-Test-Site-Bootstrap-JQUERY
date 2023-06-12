
document.addEventListener('DOMContentLoaded', function() {
  var commentButtons = document.getElementsByClassName('comment_button');
  for (var i = 0; i < commentButtons.length; i++) {
      commentButtons[i].addEventListener('click', function() {
          var commentInput = this.previousElementSibling;
          var commentText = commentInput.value.trim();

          if (commentText !== '') {
              var comment = document.createElement('div');
              comment.className = 'comment';

              var commentTextElement = document.createElement('div');
              commentTextElement.className = 'comment_text';
              commentTextElement.textContent = commentText;

              comment.appendChild(commentTextElement);

              var commentsContainer = this.nextElementSibling;
              commentsContainer.appendChild(comment);

              commentInput.value = '';

              // Store the comment in localStorage
              var postIndex = Array.from(commentButtons).indexOf(this);
              var comments = JSON.parse(localStorage.getItem('comments')) || [];
              comments[postIndex] = comments[postIndex] || [];
              comments[postIndex].push(commentText);
              localStorage.setItem('comments', JSON.stringify(comments));
          }
      });
  }

  // Retrieve comments from localStorage
  var storedComments = JSON.parse(localStorage.getItem('comments')) || [];
  var postContainers = document.getElementsByClassName('post');
  for (var j = 0; j < postContainers.length; j++) {
      var commentsContainer = postContainers[j].querySelector('.comments');
      var postComments = storedComments[j] || [];
      for (var k = 0; k < postComments.length; k++) {
          var comment = document.createElement('div');
          comment.className = 'comment';

          var commentTextElement = document.createElement('div');
          commentTextElement.className = 'comment_text';
          commentTextElement.textContent = postComments[k];

          comment.appendChild(commentTextElement);
          commentsContainer.appendChild(comment);
      }
  }
});

function toggleReelsSection() {
  var reelsSection = document.getElementById('reels-section');

  if (reelsSection.style.display === 'none') {
    reelsSection.style.display = 'block';
    viewReels();
  } else {
    reelsSection.style.display = 'none';
    pauseReels();
  }
}

// Function to view the reels
function viewReels() {
  var video = document.getElementById('reels-video');
  video.play();
}

// Function to pause the reels
function pauseReels() {
  var video = document.getElementById('reels-video');
  video.pause();
}

function initMap() {
  // Create a map object and specify the DOM element for display
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.7128, lng: -74.0060 }, // Specify the initial map center
    zoom: 12 // Specify the initial zoom level
  });
}

function initMap() {
  // Specify the coordinates of the desired location
  var myLatLng = {lat: 51.5074, lng: -0.1278};

  // Create a new map instance
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12
  });

  // Add a marker to the map
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'London'
  });
}

$(document).ready(function() {
  // mobile menu js
  // mobile menu js
  $('.bar').click (function(){
    $(this).toggleClass('open');
  });
  $('.bar').click (function(){
    $('nav.menu').toggleClass('show');
  });

  // show hide password
  // show hide password
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // notification
  // notification
  $(".doted, .exit").click(function(){
    $(".notification_box").fadeToggle(300);
    return false;
  });
  $(document).click(function(){
    $(".notification_box").hide();
  });
  $(".notification_box").click(function(){
    return false;
  });

  // slider
  // slider
  $('.slider_box').owlCarousel({
    loop:true,
    margin:20,
    dots:true,
    nav:false,
    responsive:{
      0:{
        items:1.1
      },
      576:{
        items:1.5
      },
      768:{
        items:2.5
      },
      1300:{
        items:4
      }
    }
  });
});


$(document).ready(function() {
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()
});

$(document).ready(function() {
  if($(window).innerWidth() <= 991) {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1) {
        $('.side_bar').addClass('fixed');
      } else {
        $('.side_bar').removeClass('fixed');
      }
    });
  }
});


$(window).on('scroll',function(){
  let scroll = $(window).scrollTop();
  let oTop = $('.progress_bar').offset().top - window.innerHeight;
  if(scroll>oTop){
    $(".progress_bar").addClass("progressbar_active");
  }
  else{
    $(".progress_bar").removeClass("progressbar_active");
  }
});

