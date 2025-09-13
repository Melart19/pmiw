function dibujarcelda(i, j) {
  let x = i * tam + tam / 2 + 400;
  let y = j * tam + tam / 2 + 19;

    let cerrado = false;
  
    if (solouno && !(i == soloI && j == soloJ)) {
      cerrado = true;
    } else if (solodos && i == clickI && j == clickJ) {
      cerrado = true;
    }
  
    if (cerrado) {
      fill(rojoyblanco);
      noStroke();
      ellipse(x, y, tam, tam);
      
    } else {
      let d = distanciamouse(x, y);
      let angulo;
      if (seguirmouse) {
        angulo = atan2(mouseY - y, mouseX - x);
      } else {
        angulo = radians(15 * i + j * 15);
      }
   if (d < 30) {
      fill(93, 0, 0); // rojito para marcar al proximo  pacman en desaparecer
    } else {
      fill(0);
    }
      noStroke();
      push();
      translate(x, y);
      rotate(angulo);
      arc(0, 0, tam, tam, 0, radians(229) + QUARTER_PI, PIE); //dibujo del pacman
      pop();
    }
  }
  
  function dibujargrilla(cant) {
  for (let j = 0; j < cant; j++) {
    for (let i = 0; i < cant; i++) {
      dibujarcelda(i, j);
    }
  }
}
 
