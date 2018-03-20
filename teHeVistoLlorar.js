$(document).ready(function(){


    var sentidos = ['visto', 'escuchado', 'sentido', 'cachado'];
    var verbos = ['llorar', 'matar', 'reír', 'rezar', 'rogar', 'romper', 'explotar', 'bailar', 'olvidar', 'engañar', 'amar', 'cojer', 'gozar', 'robar', 'desconfiar', 'odiar'];

    var coloresVerbo = ['red', 'darkred', 'indianred', 'maroon'];
    var note = ['no', 'no te'];
    var switchNote = false;
    var indexNote = 0;

    var verbosAPoner = 0;
    var contador = 1;
    


    $('.sentidos').text(sentidos[1]);
    $('.verbos').text(verbos[0]);

    $('.sentidos').mouseenter(function(){


       if(verbosAPoner === 0){
        var nuevoIndex = Math.floor((Math.random()*sentidos.length));
        $(this).text(sentidos[nuevoIndex]);
       } else{
        if(switchNote === true){
            indexNote = 1;
        }else{
            indexNote = 0;
        }
        $(this).text(note[indexNote]);

        switchNote = !switchNote;
       }



    });

    $('html').click(function(){
        $('.sentidos').text('pero te').css('color', 'darkred');
        $('.verbos').text('amo').css('color', 'red');
        $('body').css('background-color', 'white');
        verbosAPoner = 1;
    });

    


    $('.verbos').mouseenter(function(){

        if(verbosAPoner === 0){
            var nuevoVerbo = Math.floor((Math.random()*verbos.length));
            var nuevoColor = Math.floor((Math.random()*coloresVerbo.length));
            $(this).text(verbos[nuevoVerbo]);
            $(this).css('color', coloresVerbo[nuevoColor]);
        }else{
            $(this).text('he olvidado').css('font-size', '1em');


        }

    });
});