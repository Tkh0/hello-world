function startSelectionBox() {
  resetHighlights();
  drawBox = true;
  selectionBoxX = mouseX;
  selectionBoxY = mouseY;
}


function resetSelections() {
  resetHighlights();
  boxSelect = false;
  drawLines = false;
  drawNodes = false;
  drawDimensions = false;

  movingNodes = false;
  drawBox = false;
}


function resetHighlights() {
  for (i = 0; i < nodes.length; i++) {
    nodes[i].highlight = false;
  }
}


function hlSelection() {
  if (mouseX < selectionBoxX) {
    var x1 = mouseX;
    var x2 = selectionBoxX;
  } else {
    var x1 = selectionBoxX;
    var x2 = mouseX;
  }

  if (mouseY < selectionBoxY) {
    var y1 = mouseY;
    var y2 = selectionBoxY;
  } else {
    var y1 = selectionBoxY;
    var y2 = mouseY;
  }

  drawBox = false;
  for (i = 0; i < nodes.length; i++) {
    var nod = nodes[i]
    if (nod.x < x2 && nod.x > x1 && nod.y < y2 && nod.y > y1 && !nod.grounded) {
      nod.highlight = true;
    }
  }
}


function drawToCursor(){
  stroke(255);
  x = mouseX;
  y = mouseY;
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].neighbor_contact()) {
      x = nodes[i].x;
      y = nodes[i].y;
    }
  }
  line(selectedNode.x, selectedNode.y, x, y);
}


function addLine(){
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].neighbor_contact() && nodes[i] !== selectedNode) {
      lines.push(new lineBetween(selectedNode, nodes[i]))
      selectedNode = undefined;
      drawLines = false;
    }
  }
}


function addDimension(){
  println("trying to add");
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].neighbor_contact() && nodes[i] !== selectedNode) {
      dimensions.push(new dimension(selectedNode, nodes[i]))
      println(dimensions);
      selectedNode = undefined;
      println("hegeh");
      drawDimensions = false;
    }
  }
}
