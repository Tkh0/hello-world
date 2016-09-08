function forceHorizontal(){
  if (selectedLine.parent1.grounded && selectedLine.parent2.grounded){
    println("Both parents grounded!");
  } else{
    if (selectedLine.parent1.grounded){
      selectedLine.parent2.y = selectedLine.parent1.y;
    } else if (selectedLine.parent2.grounded){
      selectedLine.parent1.y = selectedLine.parent2.y;
    } else {
      var avg = (selectedLine.parent1.y + selectedLine.parent2.y) / 2;
      selectedLine.parent1.y = avg;
      selectedLine.parent2.y = avg
    }
  }
  selectedLine.highlight = false;
  selectedLine = undefined;
}


function forceVertical(){
  if (selectedLine.parent1.grounded && selectedLine.parent2.grounded){
    println("Both parents grounded!");
  } else{
    if (selectedLine.parent1.grounded){
      selectedLine.parent2.x = selectedLine.parent1.x;
    } else if (selectedLine.parent2.grounded){
      selectedLine.parent1.x = selectedLine.parent2.x;
    } else {
      var avg = (selectedLine.parent1.x + selectedLine.parent2.x) / 2;
      selectedLine.parent1.x = avg;
      selectedLine.parent2.x = avg
    }
  }
  selectedLine.highlight = false;
  selectedLine = undefined;
}


function checkLineContact(){
  for (i = 0; i < lines.length; i++) {
    if (lines[i].clickContact()) {
      if (selectedLine === lines[i]) {
        selectedLine.highlight = false;
        selectedLine = undefined;
        return false;
      } else{
        selectedLine = lines[i];
        selectedLine.highlight = true;
        return true;
      }
    }
  }
}


/*
function tryToDrawLine() {
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].click_contact()) {
      if (selection !== null && selection !== nodes[i]) {
        lines.push(new line_between(selection, nodes[i]));
        selection.highlight = false;
        selection = null;
        drawLines = false;
      } else {
        selection = nodes[i];
        nodes[i].highlight = true;
      }
      break;
    }
  }
}
*/