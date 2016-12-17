//document.reaady
$(function () {

    //Array de logos
    var logos = ['animanoir-logo.png', 'animanoir-logo-2.png', 'animanoir-logo-3.png'];

    $('<img class="img-responsive" src="media/' + logos[Math.floor(Math.random() * logos.length)] + '" alt="Animanioir">').appendTo('#logo');

    //Hover automático
    jQuery('ul.nav li.dropdown').hover(function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });
});