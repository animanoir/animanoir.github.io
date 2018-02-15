//document.reaady
$(function () {

    //Array de logos
    var logos = ['animanoir-logo.png', 'animanoir-logo-2.png', 'animanoir-logo-3.png',
        'animanoir-logo-4.png', 'animanoir-logo-5.png', 'animanoir-logo-6.png',
        'animanoir-logo-7.png', 'animanoir-logo-8.png', 'animanoir-logo-10.png'];



    //Logo de Animanoir
    $('<img class="img-fluid" src="media/' + logos[Math.floor(Math.random() * logos.length)] + '" alt="Animanioir">').appendTo('#logo');


    //Hover automático
    // jQuery('ul.nav li.dropdown').hover(function () {
    //     jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    // }, function () {
    //     jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    // });

    //Este código hace que un texto cambie cada x segundos. Ahorita funciona para el index.html (presentación).
    contador = 0;
    wordsArray = ["Animanoir", "entrar"];
    setInterval(function () {
        contador++;
        $("#link-hogar").fadeOut(400, function () {
            $(this).text(wordsArray[contador % wordsArray.length]).fadeIn(400);
        });
    }, 4000);


});
