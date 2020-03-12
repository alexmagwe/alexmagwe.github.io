$(document).ready(function() {
    $(window).trigger('resize').trigger('scroll');

    $menuicon = $('.right-nav ');
    $menuicon.click(function() {
        $('#menu-icon ').toggleClass('close ');
        $('.toggler ').toggleClass('hide ');


    });

    $(window).trigger('resize').trigger('scroll');

    $loadingtime = 3000;

    $('.loading ').fadeOut($loadingtime);


    window.setTimeout(function() { $('.main-container').slideDown(1300) }, $loadingtime / 2);
    clearTimeout(window);

})