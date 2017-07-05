var planeX = 100
var planeY = 240
var accel = 0
var length = 50
var ang = 0
var PlaneWidth = 10


function setup() {
createCanvas(640, 480);
strokeWeight(1);
stroke(255)
frameRate(30);
}

function draw() {
  background(0)
  if(keyIsDown(87) || keyIsDown(83)) {
  	if(accel < 10) {accel += 1};
  }
  else {
  	if (ang < 0) {
  		ang += 5
  		if(ang > 0) {ang = 0}

  	}
    if (ang > 0) {
    	ang -= 5
    	if(ang < 0) {ang = 0}
    }
  	accel = 0;
  }
  if(keyIsDown(87)) {
  	planeY -= (2 + accel);
  	if(ang > -15) {
  		ang -= 1
  	}
  }
  if(keyIsDown(83)) {
  	planeY += (2 + accel);
  	if(ang < 15) {
  		ang += 1
  	}
  }
 // ellipse(planeX,planeY,40,40);
 // triangle(planeX,planeY,planeX - (length * Math.sin((ang)/180*Math.PI + accel/100*Math.PI)), planeY + (length * Math.cos((ang)/180*Math.PI + accel/100*Math.PI)),planeX - (length * Math.sin((ang)/180*Math.PI + accel/100*Math.PI)), planeY - (length * Math.cos((ang)/180*Math.PI + accel/100*Math.PI)) )
 // line(planeX,planeY,planeX - length * (Math.cos((ang)/180*Math.PI)), planeY - length * (Math.sin((ang)/180*Math.PI)));
 var point1Ang = (ang + PlaneWidth)/180*Math.PI;
 var point2Ang = (ang - PlaneWidth)/180*Math.PI;
  triangle(planeX,planeY,planeX - length * Math.cos(point1Ang), planeY - length * Math.sin(point1Ang), planeX - length * Math.cos(point2Ang), planeY - length * Math.sin(point2Ang));
}