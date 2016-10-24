//document.reaady
$(function(){
    //Array de logos
    var logos = ['animanoir-logo.png', 'animanoir-logo-2.png', 'animanoir-logo-3.png'];

    $('<img class="img-responsive" src="media/' + logos[Math.floor(Math.random() * logos.length)] + '" alt="Animanioir">').appendTo('#logo');

});