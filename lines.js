function lineBetween(parent1, parent2) {
  this.parent1 = parent1;
  this.parent2 = parent2;
  this.highlight = false;
  this.vertical = false;
  this.horizontal = false;

  this.show = function() {
  	if (this.highlight){
  		stroke(200, 0, 0);
  		strokeWeight(3);
  	}else{
  		stroke(50);
  		strokeWeight(3);
  	}
  	line(this.parent1.x, this.parent1.y, this.parent2.x, this.parent2.y);
  }

  this.clickContact = function(){
  	var dist1 = dist(this.parent1.x, this.parent1.y, mouseX, mouseY);
  	var dist2 = dist(this.parent2.x, this.parent2.y, mouseX, mouseY);
  	var refdist = dist(this.parent1.x, this.parent1.y, this.parent2.x, this.parent2.y);
  	if (dist1 + dist2 < 1.005 * refdist){
  		return true;
  	}
  }
}