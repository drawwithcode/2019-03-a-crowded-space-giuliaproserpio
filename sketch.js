var myTearDrop;
var amountOfTearDrop = 190; //max
var allMyDrop = []; //array

var myTearDropDx;
var amountOfTearDropDx = 190; //max
var allMyDropDx = []; //array

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight); //create canvas
  frameRate(60);
  angleMode("DEGREE"); //cambio unità angoli

  for (var i = 0; i < amountOfTearDrop; i++) { //creating a for cycle with interative variable that goes from 0 to the aount of balls

    var myTearDrop = new Drop(random(windowWidth / 4 + 185, windowWidth / 4 + 160), random(0.5, 1) * windowHeight - 75, random(12, 28), "LightSkyBlue", noStroke());

    allMyDrop.push(myTearDrop);
  }

  for (var i = 0; i < amountOfTearDropDx; i++) { //creating a for cycle with interative variable that goes from 0 to the aount of balls
    var myTearDropDx = new Drop(random(windowWidth * 3 / 4 - 185, windowWidth * 3 / 4 - 160), random(0.5, 1) * windowHeight - 75, random(12, 28), "LightSkyBlue", noStroke());
    allMyDropDx.push(myTearDropDx);
  }

}

function draw() {
  background("black"); //i put colorbackground in draw so the drop doesn't leave trail

  push();
  drawEye(windowWidth / 4, windowHeight / 2, 370, "white", "aquamarine", 0); //iride sx
  drawEye(windowWidth / 4, windowHeight / 2, 150, "black", "aquamarine", 15); //pupilla sx

  drawEye(windowWidth * 3 / 4, windowHeight / 2, 370, "white", "aquamarine", 0); //iride sx
  drawEye(windowWidth * 3 / 4, windowHeight / 2, 150, "black", "aquamarine", 15); //pupilla sx
  pop();

  for (var i = 0; i < allMyDrop.length; i++) {
    var b = allMyDrop[i]; //i dell'array
    b.move();
    b.display();
  }

  for (var i = 0; i < allMyDropDx.length; i++) {
    var b = allMyDropDx[i]; //i dell'array
    b.move();
    b.display();
  }

}

function drawEye(_x, _y, _d, _color, _strokeC, _strokeW) {
  fill(_color);
  stroke(_strokeC);
  strokeWeight(_strokeW)
  ellipse(_x, _y, _d);
}

function Drop(_x, _y, _d, _color, _stroke) {
  //properties
  this.size = _d; //variable diameter
  this.x = _x;
  this.y = _y;
  this.color = _color;
  this.stroke = _stroke;

  //handcoded
  this.speedx = 0;
  this.speedy = 7;

  //methods --> action --> movement
  this.move = function() {
    this.x += this.speedx; //come deve muoversi su x. la x è uguale a x + this.speed
    this.y += this.speedy; //come deve muoversi su y. la y è uguale a y + this.speed
    if (this.y > windowHeight || this.y < 0) { //condizioni per bouncing
      this.speedx = random(-1, 1);
      this.speedy = -this.speedy;
      console.log('h'); //just cheching if it's working in the console
    } else if (this.x > windowWidth || this.x < 0) { //condizioni per bouncing
      this.speedy = random(-1, 1);
      this.speedx = -this.speedx * 3;
    }
  }

  //methods --> action --> shows the objects
  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }


}
