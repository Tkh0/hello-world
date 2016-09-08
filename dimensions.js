function dimension(parent1, parent2){
	this.parent1 = parent1;
	this.parent2 = parent2;
	this.dimType = "h";
	this.clearance = 50;

	this.show = function(){
		fill(0);
		textAlign(CENTER);
		textSize(10);
		strokeWeight(1);
		stroke(0, 100);
		if (this.dimType == "h"){
			if (this.parent1.y < this.parent2.y){
				var targetY = this.parent2.y + this.clearance;
			} else{
				var targetY = this.parent1.y + this.clearance;
			}
			line(this.parent1.x, this.parent1.y, this.parent1.x, targetY);
			line(this.parent2.x, this.parent2.y, this.parent2.x, targetY);
			line(this.parent1.x, targetY, this.parent2.x, targetY);
			text(nfc(int(dist(this.parent1.x, 0, this.parent2.x, 0))), (this.parent1.x + this.parent2.x) / 2, targetY - 8);
			triangle(this.parent1.x, targetY, this.parent1.x + 10, targetY - 4, this.parent1.x + 10, targetY + 4);
			triangle(this.parent2.x, targetY, this.parent2.x - 10, targetY - 4, this.parent2.x - 10, targetY + 4);
		} else if (this.dimType == "v"){
			if (this.parent1.x < this.parent2.x){
				var targetX = this.parent1.x - this.clearance;
			} else{
				var targetX = this.parent2.x - this.clearance;
			}
			line(targetX, this.parent1.y, this.parent1.x, this.parent1.y);
			line(targetX, this.parent2.y, this.parent2.x, this.parent2.y);
			line(targetX, this.parent1.y, targetX, this.parent2.y);
			text(nfc(int(dist(this.parent1.y, 0, this.parent2.y, 0))), targetX - 12, (this.parent1.y + this.parent2.y) / 2);
			triangle(targetX, this.parent1.y, targetX + 4, this.parent1.y + 10, targetX - 4, this.parent1.y + 10);
			triangle(targetX, this.parent2.y, targetX + 4, this.parent2.y - 10, targetX - 4, this.parent2.y - 10);
		} else {

		}
	}


	this.contact = function(){
		if (this.dimType == "h"){
			
		}
	}
}
