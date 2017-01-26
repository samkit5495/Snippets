// General window load function

$(window).load(function() {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});
})


//enter the count down date using the format year, month, day, time:time
$(".count-down").ccountdown(2017,2,9,'08:00');

// Utilizing the Modernizr object created to implement placeholder functionality
function hasPlaceholderSupport() {
  var input = document.createElement('input');
  return ('placeholder' in input);
}

if (!Modernizr.input.placeholder) {
  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
    }
  }).blur();
  $('[placeholder]').parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    })
  });
}
$('a[href="#"]').click(function(e) {
  e.preventDefault();
});

//Animate Section on Appear
$(document).ready(function() {
  $('.fade-down').each(function() {
    $(this).appear(function() {
      $(this).delay(1000).addClass('animated fadeInDown');
    });
  });

  $("a.tool-tip").tooltip();   

});