//Óscar A. Montiel
//The Nature of Code en Kadenze
//twitter: @_geosmina
//github: https://animanoir.github.io/

//Crea un arreglo.
var walkers = new Array(250);
var ancho = 400;
var altura = 400;

function setup() {
  //Escenario
  var cvs = createCanvas(ancho, altura);
  cvs.parent("contenedor")
  background(random(255), random(255), random(255));
  smooth(); //Le pone antialias, creo.

  //Inicializa objetos en el arreglo.
  for (var i = 0; i < walkers.length; i++) {
    walkers[i] = new Walker();
  }

}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);
  for (var i = 0; i < walkers.length; i++) {
    walkers[i].display();
    walkers[i].update();
  }
}

//Walker class
function Walker() {
  //Crea un Walker en una parte al azar del canvas.
  this.pos = createVector(random(width), random(height));
  var c = color(random(255), random(255), random(255));
  

  //Funciones
  this.update = function () {
    //Mueve el objeto al azaar.
    var vel = createVector(random(-1, 1), random(-1, 1));
    this.pos.add(vel);
  };

  this.display = function () {
    var escalar = random(20);
    var n = noise(millis()) * escalar;
    print(n);
    //Dibuja un círculo como un Walker
    noStroke();
    fill(c);
    ellipse(this.pos.x, this.pos.y, n, n); //this.pos.x y .y se refiere a los atributos x y y de un createVector.
  };
}

