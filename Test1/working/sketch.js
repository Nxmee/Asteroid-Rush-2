var Ship

function setup() {
	Ship = new ship();
createCanvas(640, 480);
strokeWeight(1);
stroke(255)
frameRate(30);
}

function draw() {
  background(0)
  if(keyIsDown(87)) {
  	Ship.upKey()
  }
  if(keyIsDown(83)) {
  	Ship.downKey()
  }
  Ship.update()
  Ship.show()
 // ellipse(planeX,planeY,40,40);
 // triangle(planeX,planeY,planeX - (length * Math.sin((ang)/180*Math.PI + accel/100*Math.PI)), planeY + (length * Math.cos((ang)/180*Math.PI + accel/100*Math.PI)),planeX - (length * Math.sin((ang)/180*Math.PI + accel/100*Math.PI)), planeY - (length * Math.cos((ang)/180*Math.PI + accel/100*Math.PI)) )
 // line(planeX,planeY,planeX - length * (Math.cos((ang)/180*Math.PI)), planeY - length * (Math.sin((ang)/180*Math.PI)));
 
}