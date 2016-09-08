function setup() {
  createCanvas(600, 600);
  frameRate(30);
  rectMode(CORNERS);
  for (i = 0; i < 4; i++) {
    nodes.push(new node());
    nodes[i].x = 100 + 100 * i;
    nodes[i].y = 100 + 100 * i;
  }
  nodes[1].x = 300;
  lines.push(new lineBetween(nodes[1], nodes[2]));
  lines.push(new lineBetween(nodes[1], nodes[3]));
  nodes[0].grounded = true;
  dimensions.push(new dimension(nodes[0], nodes[2]));
  dimensions.push(new dimension(nodes[0], nodes[1]));
  dimensions[1].dimType = "v";
}


function draw() {
  background(150);
  fill(255, 100, 100);
  noStroke();
  textSize(25);
  textAlign(RIGHT);
  if (drawLines) {
    text("Drawing lines", width - 10, 20)
    if (selectedNode !== undefined){
      drawToCursor();
    }
  } else if (drawNodes) {
    text("Drawing nodes", width - 10, 20)
  } else if (drawDimensions) {
    text("Drawing dimension", width - 10, 20)
  }

  if (movingNodes){
    moveNodes();
  }

  if (drawBox) {
    stroke(255);
    strokeWeight(2);
    fill(0, 0, 255, 50);
    rect(selectionBoxX, selectionBoxY, mouseX, mouseY);
  }

  for (i = 0; i < nodes.length; i++) {
    nodes[i].show();
  }

  for (i = 0; i < lines.length; i++) {
    lines[i].show();
  }

  for (i = 0; i < dimensions.length; i++) {
    dimensions[i].show();
  }
}