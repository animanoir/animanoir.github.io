// Master code by Daniel Shiffman, implemented by Óscar A. Montiel

//Array to store all the new foods
var foods = []; 
var fish = [];
var ancho = 740;
var altura = 500;

// Liquid
var liquid;

function setup() {
  var cvs = createCanvas(ancho, altura);
  cvs.parent("contenedor2");
  // Create liquid object
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

  
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);

  // Draw water
  liquid.display();

  for(var i = 0; i<foods.length; i++){

    /*if(liquid.contains(foods[i])){
      var dragForce = liquid.calculateDrag(foods[i]);
      foods[i].applyForce(dragForce);
    }

    */

    var gravity = createVector(0, 0.01 * foods[i].mass);

    foods[i].applyForce(gravity);
  
    foods[i].update();
    foods[i].display();
    //foods[i].checkEdges();

    var target = createVector(foods[i].position.x, foods[i].position.y);
    fish[i].arrive(target);

    fish[i].update();
    fish[i].display();
  }
}

function mouseDragged(){
  //Create new Food object and add it to the array foods
  foods.push(new Food(random(0.5, 2), mouseX, mouseY)); //mass, x, y
  fish.push(new Fish(random(width), random(height), 1, random(255), random(255), random(255)));
}