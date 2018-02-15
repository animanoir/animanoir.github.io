$(function() {
  //hogar.html
  $("#header-logo")
    .mouseover(function() {
      $(this).attr("src", "../media/animanoir-logo-inverso-chico.png");
    })
    .mouseout(function() {
      $(this).attr("src", "../media/animanoir-logo-blanco-chico.png");
    });

    $('#hover-texto-sexo').hover(function(){
        $texto_anterior=$(this).text();
        $(this).text("sexo");
    },function(){
        $(this).text($texto_anterior);
        });
});
