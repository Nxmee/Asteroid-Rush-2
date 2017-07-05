function ship() {
	this.x = 100;
	this.y = 240;
	this.accel = 0;
	this.length = 50;
	this.ang = 0;
	this.wingSpan = 10;
	this.goingUp = false;
	this.goingDown = false;

	this.show = function() {
		fill(255);
		this.p1Ang = (this.ang + this.wingSpan)/180*Math.PI;
 		this.p2Ang = (this.ang - this.wingSpan)/180*Math.PI;
  		triangle(this.x,this.y,this.x - this.length * Math.cos(this.p1Ang), this.y - this.length * Math.sin(this.p1Ang), this.x - this.length * Math.cos(this.p2Ang), this.y - this.length * Math.sin(this.p2Ang));
	}

	this.upKey = function() {
		this.goingUp = true
	}

	this.downKey = function() {
		this.goingDown = true
	}

	this.update = function() {

		if(this.goingUp || this.goingDown) {
  			if(this.accel < 10) {this.accel += 1};
  		}
  		else {
  			if (this.ang < 0) {
  				this.ang += 5
  				if(this.ang > 0) {this.ang = 0}

  			}

    		if (this.ang > 0) {
    			this.ang -= 5
    			if(this.ang < 0) {this.ang = 0}
    		}

  			this.accel = 0;
  		}

  		if(this.goingUp) {
  			this.y -= (2 + this.accel);
  			if(this.ang > -15) {
  				this.ang -= 1
  			}
  		}

  		if(this.goingDown) {
  			this.y += (2 + this.accel);
  			if(this.ang < 15) {
  				this.ang += 1
  			}
  		}
  		this.goingUp = false
  		this.goingDown = false
	}
}