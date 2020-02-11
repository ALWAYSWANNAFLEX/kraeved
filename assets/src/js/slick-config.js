$(document).ready(function(){
    $('.prev-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false, 
      dots: true,
      asNavFor: '.slider-nav'
    });
  });
  $('.slider-nav').slick({
      asNavFor: '.prev-carousel',
      arrows: false,
      focusOnSelect: true,
      adaptiveHeight: true,
      slidesToShow: all
  });