$(document).ready(function() {
    $menuicon = $('.right-nav ');
    $menuicon.click(function() {
        $('#menu-icon ').toggleClass('close ');
        $('.toggler ').toggleClass('hide ');


    });


    $loadingtime = 3000;

    $('.loading ').fadeOut($loadingtime);


    window.setTimeout(function() { $('.main-container').slideDown(1300) }, $loadingtime / 2);
    clearTimeout(window);

})