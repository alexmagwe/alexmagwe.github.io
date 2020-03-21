$(document).ready(function() {
    function parallaxed() {
        $offset = $(window).scrollTop();
        $bgmove = $offset * -0.2 + 'px'
        console.log($bgmove)
        $('.landing,.services-content,.contact-card').css('backgroundPositionY', $bgmove);
        if ($offset > 300) {
            $bgmove = ($offset - 300) * -0.2 + 'px';


            $('.contact-card').css('backgroundPositionY', $bgmove);


        }
        return;
    };


    $menuicon = $('.right-nav ');
    $menuicon.click(function() {
        $('#menu-icon ').toggleClass('close ');
        $('main').toggleClass('fade');
        $('.toggler ').toggleClass('hide ');

    });
    $(window).trigger('resize').trigger('scroll');

    $loadingtime = 3000;

    $('.loading ').fadeOut($loadingtime);


    window.setTimeout(function() { $('.main-container').fadeIn(1300) }, $loadingtime / 2);
    clearTimeout(window);
    $(window).on('scroll', function() { parallaxed() });


})