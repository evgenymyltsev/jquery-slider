$(document).ready(function() {
  // set options
  var speed = 500;
  var autoswitch = true;
  var autoswitch = 4000;
  var autoswitch_speed = 2000;

  $('.slide').first().addClass('active');

  $('.slide').hide();

  $('.active').show();

  $('#next').on('click', nextSlide);

  $('#prev').on('click', prevSlide);

  if(autoswitch){
    setInterval(nextSlide,autoswitch_speed);
  }

  function nextSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  function prevSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    } else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
});
