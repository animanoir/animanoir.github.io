//Óscar A. Montiel
//The Nature of Code en Kadenze (Course, homework 1).
//twitter: @_geosmina
//github: https://animanoir.github.io/

//Crea un arreglo.
var walkers = new Array(250);
var ancho = 740;
var altura = 500;

function setup() {
  //Escenario
  var cvs = createCanvas(ancho, altura);
  cvs.parent("contenedor2")
  background(0);
  smooth(); //I think it smooths it.

  //Inicializa objetos en el arreglo.
  for (var i = 0; i < walkers.length; i++) {
    walkers[i] = new Walker();
  }

}

function draw() {
  for (var i = 0; i < walkers.length; i++) {
    walkers[i].display();
    walkers[i].update();
  }
}

//Walker class
function Walker() {
  var escalar = random(10); //That will multiply the noise.
  var n = noise(millis()) * escalar;
  this.pos = createVector(random(width), random(height));  //Creates a Walker at a random coordinate in the canvas.
  var c = color(random(255), random(250), random(255));
  

  //Funciones
  this.update = function () {
    var mouse = createVector(mouseX, mouseY); //Mouse vector
    this.acc = p5.Vector.sub(mouse, this.pos); //Acceleration vector
    this.acc.mult(0.01);
    this.vel = createVector(random(-5, 5), random(-5, 5));//Mueve el objeto al azar.
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  };

  this.display = function () {
    
    //Dibuja un círculo como un Walker
    noStroke();
    fill(c);
    ellipse(this.pos.x, this.pos.y, n, n); //this.pos.x y .y se refiere a los atributos x y y de un createVector.
  };
  
 
 
  
}

 function mouseClicked(){
    setup();
  }
  
