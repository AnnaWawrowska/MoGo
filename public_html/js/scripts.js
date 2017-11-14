
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

    // $( ".map__overlay" ).on( "click", function( ) {
    //     $('.map__container').addClass("map__open");
    //     $('.map__overlay').hide();
    // });
    //
    // $(".map").dblclick(function() {
    //     $('.map__container').removeClass('map__open');
    //     $('.map__overlay').show();
    //
    // });
});

$( window ).resize(function() {
    $('.gallery').masonry({
        itemSelector: '.gallery__item',
        percentPosition: true
    });
});
