$(function () {
	//código jQuer

	//hogar.html
	$('#header-logo')
		.mouseover(function () {
			$(this).attr('src', '../media/animanoir-logo-inverso-chico.png');
		})
		.mouseout(function () {
			$(this).attr('src', '../media/animanoir-logo-blanco-chico.png');
		});

	// //Frases vergas de libros
	// $('<img class="img-fluid" src="' + frases[indexRandomFrases] + '" alt="Frases vergas">').appendTo('#frases-vergas');
	// $('<p class="text-right"><i>' + autorFrases[indexRandomFrases] + '<i><p>').appendTo('#frases-vergas');

	$('#hover-texto-sexo').hover(function () {
		$texto_anterior = $(this).text();
		$(this).text('sexo');
	}, function () {
		$(this).text($texto_anterior);
	});
});