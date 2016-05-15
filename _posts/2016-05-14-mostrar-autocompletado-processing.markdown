---
layout: post
title:  "Activar autocompletado en P5 (Processing)"
date:   2016-05-14 22:30:00 -0500
categories: programacion processing
---

[Processing](https://processing.org/) es uno de los lenguajes de programación más estúpidamente fáciles de aprender. Es más, es ideal para aquellas personas que jamás en su vida pensaban que podían *programar*, o mejor dicho, *pensar como programador*.

En este post me gustaría compartir la manera en la que uno puede activar el **autocompletado**.

<br>

<center><img src="https://65.media.tumblr.com/16d94bba64736aebc6048224cf96fc2e/tumblr_o778r6Fd7v1rtghino1_400.png"></center>

<br>

Es tan sencillo como programar en Processing. Awebo que sí.

Lo primero que hay que hacer es abrir Processing. Luego, en *Archivo*, buscamos *Preferencias* (yo lo tengo en inglés, por lo que diría *Preferences*). Le damos click y volvemos a hacer click en el enlace de hasta abajo (donde dice *more preferences can be edited* bla, bla...).
<br>
<center>**Edítalo sólo cuando tengas Processing cerrado** No sé, pero así te advierten :~O</center>
<br>
<center><img src="https://65.media.tumblr.com/dff817aa1262622fed8d39bc56dcac97/tumblr_o7790dQu6z1rtghino1_500.png
"></center>
<br>
El link abrirá una ventana en el explorador de tu sistema operativo. A nosotros nos concierne el archivo *preferences.txt*.

Cuando se abra, tendremos una lista de muchas preferencias que no aparecen en la ventana del programa, ya sea porque suelen ser poco frecuente su uso, o porque no se recomienda editarlas.
<center><img src="https://66.media.tumblr.com/0ecdebe34e4ecda25aef3fa8e5ebfa54/tumblr_o779bskycs1rtghino1_400.png"></center>
<br>
En esa lista debemos encontrar la que diga *pdx.completion.trigger* y cambiar su atributo a **true**. Para aquellos que entiendan, acabamos de cambiar un valo *booleano*. Normalmente así se manejan muchas cosas en programación. Un *true* o un *false*. Un *me quieres* o *no me quieres*.

¡Y listo! Debería aparecer tu autocompletado en el editor de Processing mientras codeas.

Cualquier duda, sugerencia o comentario, no duces comentar :~)

<div id="disqus_thread"></div>
<script>
/**
* RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
* LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');

s.src = '//animanoir-blog.disqus.com/embed.js';

s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>


