!function ($) {
    'use strict';

    // write code here
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: true,
      });

      $('.menu-icon').click(function (e) { 
        e.preventDefault();
        $('ul[role="navigation"]').toggle();
      });

      
}.call(window, window.jQuery);