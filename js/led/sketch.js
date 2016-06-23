var led;
var galaxia;
var x;


function setup() {
  //Usa un div con id p5 como canvas.
  var cnv = createCanvas(301, 455);
  cnv.parent("p5");
  galaxia = loadImage("../js/led/andromeda.jpg");
  led = loadImage("../js/led/led-transparente.png");
  x = 0;
}

function draw() {
  background(0);
  x += 0.1;
  push();
  image(galaxia, x, 0);
  pop();
  image(led, 0, 0);

  if (x >= 100) {
    x = 0;
  }



}
