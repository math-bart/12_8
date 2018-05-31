$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
 
$(function(){
  $('#js-click').click(function() {
	 $('#js-mymodal').html('<h1>DONE!</h1><h5>We will soon call back to You!</h5>');
  });
   $('#submit-prices-s').click(function() {
    $('#body-prices-s').html('<h2>DONE!</h2><h5>Thank you for choose us! Transaction details was send to Your e-mail</h5>');
	$('#submit-prices-s').css('display', 'none');
  });
  $('#submit-prices-e').click(function() {
    $('#body-prices-e').html('<h2>DONE!</h2><h5>Thank you for choose us! Transaction details was send to Your e-mail</h5>');
	$('#submit-prices-e').css('display', 'none');
  });
   $('#submit-prices-p').click(function() {
    $('#body-prices-p').html('<h2>DONE!</h2><h5>Thank you for choose us! Transaction details was send to Your e-mail</h5>');
	$('#submit-prices-p').css('display', 'none');
  });
  $('#submit-prices-l').click(function() {
    $('#body-prices-l').html('<h2>DONE!</h2><h5>Thank you for choose us! Transaction details was send to Your e-mail</h5>');
	$('#submit-prices-l').css('display', 'none');
  });
  $('.carousel').carousel({
        pause: 'none'
    })
});