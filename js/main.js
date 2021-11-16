
$(document).ready(function(){

    $('#search, .fa-search').mouseenter(function(){
        $('.logo').hide();
    });

    $('#search, .fa-search').mouseleave(function(){
        $('.logo').show();
    });

    $('.fa-bars').click(function(){
        $('.navbar').toggle();
        $(this).toggleClass('fa-times');
    });

    $('.navbar, .navbar a').click(function(){
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times');
    });

    
    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        autoplay:true,
    });


    $(window).on('scroll load',function(){

        if($(window).scrollTop() > 20){
            $('#header').css({
                'background':'#345B63',
                'box-shadow':'0 .1rem .3rem #000'
            });
        }else{
            $('#header').css({
                'background':'#333',
                'box-shadow':'none'
            });
        }

    });

});