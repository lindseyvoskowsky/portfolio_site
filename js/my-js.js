$('.myLinkToTop').click(function () {
    $('html, body').animate({scrollTop:$(document).height()}, 4000);
    return false;
});

$('.myMenuLink').click(function () {
    $('html, body').animate({scrollTop:0}, 4000);
    return false;
});

