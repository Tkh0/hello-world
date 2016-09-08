function node() {
  this.x = mouseX;
  this.y = mouseY;
  this.col = color(150, 255, 100);
  this.hlcol = color(255, 150, 100);
  this.groundedcol = color(50);
  this.highlight = false;
  this.grounded = false;

  this.show = function() {
    noStroke();
    fill(this.col);
    if (this.highlight) {
      fill(this.hlcol);
    }else if (this.grounded){
      strokeWeight(2);
      stroke(255, 0, 0);
      fill(this.groundedcol);
    }
    ellipse(this.x, this.y, radius * 2, radius * 2);
  }

  this.click_contact = function() {
    if (dist(mouseX, mouseY, this.x, this.y) < radius) {
      return true;
    }
  }
  
  this.neighbor_contact = function() {
    if (dist(mouseX, mouseY, this.x, this.y) < 2.5 * radius) {
      return true;
    }
  }

  this.overlayContact = function(other){
    if (dist(this.x, this.y, other.x, other.y) < 2 * radius){
      return true;
    }
  }
}
