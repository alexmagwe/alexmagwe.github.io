$(document).ready(function() {
    $(window).on('scroll',()=>{
        if ($(window).scrollTop()>0){
            $('.navbar').addClass('stickytop')
        }
        else{
            $('.navbar').removeClass('stickytop')

        }
    })
   


    function parallaxed() {
        $offset = $(window).scrollTop();
        $bgmove = $offset * -0.1 + 'px'

        $('.contactus').css('backgroundPositionY', $bgmove);

        return;
    };


    $menuicon = $('.right-nav ');
    $menuicon.click(function() {
        $('#menu-icon ').toggleClass('close ');
        $('main').toggleClass('fade');
        $('.toggler ').toggleClass('hide ');
        $('main').on('click',
            function() {
                $('.toggler ').removeClass('hide');
                $('main').removeClass('fade');

            })


    });
    $(window).trigger('resize').trigger('scroll');

    $loadingtime = 3000;

    $('.loading ').fadeOut($loadingtime);


    window.setTimeout(function() { $('.main-container').fadeIn(3000) }, $loadingtime/2);
    clearTimeout(window);
    $(window).on('scroll', function() { parallaxed() });


})