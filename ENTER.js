  function keyPressed() {
     if (key === 'Enter' || keyCode === ENTER) {
    seguirmouse = !seguirmouse;
  }//todos siguen al mouse
    
    if (key === 'c' || key === 'C') {
    solouno = true;
  }//mueren casi o todos los pacman
    
    if (key === 'r' || key === 'R') {
    solodos = false;
    solouno = false;
    clickI = clickJ = -1;
    soloI = soloJ = -1;
    rojoyblanco = color(239,239,239);
  }// reinicia a como estaba
}
  
  
  function mousePressed() {
   let i = floor((mouseX - 400) / tam);
  let j = floor((mouseY - 19) / tam);
    
    if (i >= 0 && i < cant && j >= 0 && j < cant) {
      if (mouseButton == LEFT) {
        if (clickI == i && clickJ == j && solodos) {
          solodos = false; 
           if (random(1) < 0.5) {
       rojoyblanco = color(239,239,239); // muere el pacman
      } else {
        rojoyblanco = color(255, 0, 0); // se lastima el pobre pacman
      }
        } else {
          clickI = i;
          clickJ = j;
          solodos = true;
          solouno = false; 
        }
      } else if (mouseButton === RIGHT) {
        soloI = i;
        soloJ = j;
        solouno = true;
        solodos = false;
         if (random(1) < 0.5) {
       rojoyblanco = color(239,239,239); // muere el pacman
      } else {
        rojoyblanco = color(255, 0, 0); // se lastima el pobre pacman
      }
      }
    }
  }
  function distanciamouse(x, y) {
  return dist(mouseX, mouseY, x, y);
  }
