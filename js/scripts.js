$(document).ready(function () {
  $('.slider-header').slick({
    // autoplay: true
  });
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  // Display the result in the element with id="demo"
  document.getElementById("timer_h").innerHTML = hours + ": ";
  document.getElementById("timer_m").innerHTML = minutes + ": ";
  document.getElementById("timer_s").innerHTML = seconds + "";


  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

$(document).ready(function() { 
  setTimeout(function() { 
   $('#myModal').modal('show'); 
  }, 5000); 
  setTimeout(function() { 
    $('#myModal').modal('hide'); 
   }, 10000);
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});