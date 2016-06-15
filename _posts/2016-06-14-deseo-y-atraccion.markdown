---
layout: post
comments: true
title:  "Deseo"
date:   2016-06-11 17:35:00 -0500
categories: programacion p5js
---

Sketch que usa un algoritmo creado por [Craig Reynolds](http://www.red3d.com/cwr/), específicamente uno de *Steering*.
Básicamente lo que sucede es que los círculos son seguidos por los triángulos, pero éstos aparecen de manera aleatoria dentro el canvas.

Usando la formula `steering = desire - velocity` (la cual incluye manejo básico de vectores) es posible darle ese sentido de "deseo" por los objetos triangulares por los círculos y, por lo tanto, seguirlos.

Luego subo el código que ya me dio flojera limpiarlo.

Mantén pulsado el botón del mouse.


<!-- Carga de archivo js -->
<html>
    <head>
        <script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.0/p5.js"></script>
        <script src="{{site.baseurl}}/js/desire/sketch.js"></script>
        <script src="{{site.baseurl}}/js/desire/food.js"></script>
        <script src="{{site.baseurl}}/js/desire/liquid.js"></script>
        <script src="{{site.baseurl}}/js/desire/vehicle.js"></script>
    </head>
    <body>
        <center>
            <div id="contenedor2"></div>
        </center>
    </body>
</html>
<br>
<center>
<!--<script src="https://gist.github.com/animanoir/b12594eed431bc2353c073e8761599da.js"></script>-->
</center>

<!-- Comentarios -->
{% if page.comments %}
<div id="disqus_thread"></div>
<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */
    /*
    var disqus_config = function () {
        this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        
        s.src = '//animanoir-blog.disqus.com/embed.js';
        
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
{% endif %}
