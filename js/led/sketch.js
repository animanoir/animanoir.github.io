var led;
var galaxia;
var x = -200;

//Array de imágenes de galaxias
var galaxias = ["../js/led/orion.jpg", "../js/led/horse.jpg", "../js/led/swan.jpg", "../js/led/eagle.jpg"];
var galaxiaElegida;


function setup() {
  //Usa un div con id p5 como canvas.
  var cnv = createCanvas(301, 455);
  cnv.parent("p5");

  //Selecciona un index de galaxias al azar
  galaxiaElegida = (int(random(4)));
  galaxia = loadImage(galaxias[galaxiaElegida]);
  led = loadImage("../js/led/led-transparente.png");
}

function draw() {
  background(0);
  x += 0.05;
  push();
  if (x >= -100) {
    galaxiaElegida = (int(random(4)));
    galaxia = loadImage(galaxias[galaxiaElegida]);
    x = -200;
  }
  image(galaxia, x, 0);
  pop();

  //Máscara
  image(led, 0, 0);
}
