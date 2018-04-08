$(function() {

  //Array de imágenes frases de libros
  var frases = ['https://dl.dropbox.com/s/3b13riix4wi4kko/italo-calvino-elCaminoElegido.jpg?raw=1',
                'https://dl.dropbox.com/s/pb0h7us6jk7wf2a/murakami-Tokioblues.jpg?raw=0',
                'https://dl.dropbox.com/s/bzixfxuho99zja1/problema-con-modern-art.png?raw=0',
                'https://dl.dropbox.com/s/5tps9gvo8zf705q/musicofilia-oliver-sacks.jpg?raw=0'
              
              
              
               ];

  //Aquí tiene que ser ahuevo por orden.
  var autorFrases =['El barón rampante, Italo Calvino', 
                    'Tokio Blues, Haruki Murakami',
                    'El problema con el arte moderno, (lo encontré en internet)',
                    'Musicofilia, Oliver Sacks'
                   ]; 

  var indexRandomFrases = Math.floor(Math.random() * frases.length);
  
  //hogar.html
  $("#header-logo")
    .mouseover(function() {
      $(this).attr("src", "../media/animanoir-logo-inverso-chico.png");
    })
    .mouseout(function() {
      $(this).attr("src", "../media/animanoir-logo-blanco-chico.png");
    });

    //Frases vergas de libros
    $('<img class="img-fluid" src="' + frases[indexRandomFrases] + '" alt="Frases vergas">').appendTo('#frases-vergas');
    $('<p class="text-right"><i>'+autorFrases[indexRandomFrases]+'<i><p>').appendTo('#frases-vergas');

    $('#hover-texto-sexo').hover(function(){
        $texto_anterior=$(this).text();
        $(this).text("sexo");
    },function(){
        $(this).text($texto_anterior);
        });
});
