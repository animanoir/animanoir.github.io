window.onload = function () {

    // Pequeño script que cambia el texto cuando metes el mouse.
    const arrayPalabras = [
        'animanoir.xyz',
        'Sexo, muerte y matemáticas.',
        'Per aspera ad astra.',
        'Paciencia y persistencia.',
        'Dómr um dauðan hvern.',
        'Aphex Twin - 4',
        'La armonía es caos domesticado.',
        'Safety In Solitude',
        'De una sola fuente todas las cosas dependen.',
        'Cancún: Neo-Tristeza',
        'La sublimación del Powerchord.',
        'Diplopia mental.',
        'El vaivén de tu sangre en momentos de sosiego.',
        'Unus mundus',
        'Tu doppelgänger.',
        'Post-Nouveau avant-garde emofunk.',
        'paypal.me/omontielanimanoir',
        'Don\'t forget 3.oct.10',
        'Lucky stars in your eyes.',
        'D3530 Y D151MUL4C10N',
        'Bulgarian otaku.',
        'h411oween Em0',
        'By working the soil, we cultivate the sky',
        'One more red nightmare.',
        'In you I\'m lost',
        'Petiatil Cx Htdui',
        'Solo y triste voy a estar en este cementerio...',
        'Théâtre de la Cruauté',
        'Death is real.',
        'Anata no urami, harashimasu.',
        'Nah und fern.',
        'Fortuna favet fortibus',
        'El inconsciente colectivo.',
        'Ráyame mi muro.',
        'Shine on, You crazy Diamond',
        'Cuando uno deja de crecer, empieza a morir.',
        'Amor adolescente.',
        'Autoscopia',
        'Su piel era música tangible.',
        'O<-^3<',
        'Góticotakus',
        'Yesterday and today.',
        'Llévame un día a tu lugar secreto.',
        'Hipersensible a la realidad.',
        'A stop at the chord cascades.',
        'Everything you do is a balloon.',
        '森を覚えている',
        'Music has the right to children.',
    ];
    const menuLatInicio = document.querySelector('#menu-lat-inicio');

    menuLatInicio.onmouseenter = function () {
        let i = Math.floor((Math.random() * arrayPalabras.length));
        menuLatInicio.textContent = arrayPalabras[i];
    }

    menuLatInicio.onmouseleave = function () {
        menuLatInicio.textContent = 'Animanoir';
    }

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("menu-navbar").style.top = "0";
        } else {
            document.getElementById("menu-navbar").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }
}