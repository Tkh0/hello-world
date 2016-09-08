function tryToCreateNode() {
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].neighbor_contact()) {
      println("Neighbor interference found!");
      return;
    }
  }
  nodes.push(new node());
}


function checkClickContact() {
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].click_contact()) {
      return nodes[i];
    }
  }
}


function tryToHighlightNode() {
  var nod = checkClickContact();
  if (nod !== undefined) {
    if (!nod.grounded) {
      nod.highlight = !nod.highlight;
    }
  }
}


function tryToStartLine() {
  nod = checkClickContact();
  if (nod !== undefined) {
    selectedNode = nod;
    nod.highlight = true;
  }
}


function tryToStartDimension() {
  nod = checkClickContact();
  if (nod !== undefined) {
    selectedNode = nod;
    nod.highlight = true;
  }
}


function tryToGround() {
  nod = checkClickContact();
  if (nod !== undefined) {
    nod.grounded = !nod.grounded;
    nod.highlight = false;
  }
}


function checkOverlay(){
  getHighlightedNodes();
  for (i=0;i<hlNodes.length;i++){
    for (j=0;j<nodes.length;j++){
      if (hlNodes[i] !== nodes[j]){
        while (hlNodes[i].overlayContact(nodes[j])){
          hlNodes[i].x += 3 * radius;
          hlNodes[i].y += 1 * radius;
        }
      }
    }
    
  }
}


function getHighlightedNodes(){
  hlNodes = [];
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].highlight) {
      hlNodes.push(nodes[i]);
    }
  }
}


function moveNodes() {
  movable = [];
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].highlight) {
      movable.push(nodes[i]);
    }
  }
  for (i = 0; i < movable.length; i++) {
    movable[i].x = movable[i].x + mouseX - moveX;
    movable[i].y = movable[i].y + mouseY - moveY;
    if (movable[i].x < radius){
      movable[i].x = radius;
    } else if (movable[i].x > width - radius){
      movable[i].x = width - radius;
    }
    if (movable[i].y < radius){
      movable[i].y = radius;
    } else if (movable[i].y > height - radius){
      movable[i].y = height - radius;
    }
  }
  moveX = mouseX;
  moveY = mouseY;
}
