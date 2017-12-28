
$(document).ready(function(){

    $( ".accordion" ).accordion();

    $('.slider').slick();
    $('.slider-alt').slick();

    $(".content").mCustomScrollbar();

    $('.gallery').masonry({
        itemSelector: '.gallery__item',
        percentPosition: true
    });

    $('.counter').counterUp({
        delay: 10
    });
});

$( window ).resize(function() {
    $('.gallery').masonry({
        itemSelector: '.gallery__item',
        percentPosition: true
    });
});
