function mousePressed() {
  dimensions[1].dimType = "h";
  if (mouseButton == LEFT) {
    if (drawLines){
      tryToStartLine();
    } else if (drawNodes) {
      tryToCreateNode();
    } else if (drawDimensions){
      tryToStartDimension(); 
    } else{
      if (!shift && !ctrl){
        resetSelections();
      }
      if (!shift) {
        tryToHighlightNode();
      }
      if (checkClickContact() !== undefined) {
        movingNodes = true;
        moveX = mouseX;
        moveY = mouseY;
      } else if (checkLineContact()){}
      else {
        startSelectionBox();
      }
    }
  }
}


function mouseReleased() {
  if (mouseButton == RIGHT) {
    tryToGround();
  } else if (drawLines && selectedNode !== undefined){
      addLine();
  } else if (drawDimensions && selectedNode !== undefined){
      addDimension();
  } else {
    if (drawBox) {
      hlSelection();
    }
    movingNodes = false;
    checkOverlay();
  }
}


function keyReleased() {
  ctrl = false;
  shift = false;
}


function keyPressed() {
  if (key == "L") {
    drawLines = true;
  } else if (key == "N") {
    drawNodes = true;
  } else if (key == "H" && selectedLine !== undefined) {
    forceHorizontal();
  } else if (key == "V" && selectedLine !== undefined) {
    forceVertical();
  } else if (key == "D") {
    drawDimensions = true;
  } else if (keyCode == KEYCODE_ESC) {
    resetSelections();
  } else if (keyCode == KEYCODE_CTRL) {
    ctrl = true;
  } else if (keyCode == KEYCODE_SHIFT) {
    shift = true;
  }
}
