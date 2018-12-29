// p5.js
let led; //Imagen transparente.
let galaxia; //Imagen que va dentro de led.
let x = -200; //Eje x de la imagen para que se mueva.
let alpha = 0; //Transparencia de la imagen para un efecto lindo de aparición.

//Array de imágenes.
let galaxias = ["assets/js/n1.jpg", "assets/js/n2.jpg", "assets/js/n3.jpg", "assets/js/n4.jpg"];
let galaxiaElegida;

function preload() {
  //Selecciona un index de galaxias al azar
  galaxiaElegida = (int(random(galaxias.length)));
  galaxia = loadImage(galaxias[galaxiaElegida]);
  led = loadImage("assets/js/led-transparente.png");
}

function setup() {
  //Usa un div con id p5 como canvas.
  let cnv = createCanvas(301, 455);
  cnv.parent("p5");
}

function draw() {
  background(0);
  cambiarNebula();
  //Máscara transparente
  image(led, 0, 0);
}

// Esta función hace el cambio de las nébulas que salen dentro de Led.
function cambiarNebula() {
  // x es el eje x donde se mueve la ImageBitmapRenderingContext. 
  x += 0.29;
  // alpha es para el efecto como de aparecer.
  alpha += 3;
  push();
  // Cuando es mayor o igual a -100, hace lo que está dentro, que es como reiniciar.
  if (x >= -100) {
    galaxiaElegida = (int(random(galaxias.length)));
    galaxia = loadImage(galaxias[galaxiaElegida]);
    x = -200;
    alpha = 0;
  }
  tint(255, alpha);
  image(galaxia, x, 0);
  pop();
}



window.onload = function () {

  // Para no usar jQuery:
  let idP5 = document.querySelector("#p5");
  let idLimboNombre = document.querySelector("#limbo-nombre");

  idP5.onmouseover = function () {
    idLimboNombre.style.textShadow = "-4px 5px 1px red, 1px 4px 2px green, 4px 7px 3px blue";

  };

  idP5.onmouseleave = function () {
    idLimboNombre.style.textShadow = null;
  };

}