 //VIDEO: https://youtu.be/BGXcj2LAJlM?si=8DsfbRbCucTaHTy2
  
  let opart;
let tam = 28.2;
  let cant = 13;
   let seguirmouse = false;
  let clickI = -1;
  let clickJ = -1;
  let solouno = false; //un solo  pacman el resto  muertos
  let solodos = false; //uno muerto
  let soloI = -1;
  let soloJ = -1;
  let rojoyblanco; 
  
  function preload() {
     opart = loadImage("data/opart.jpg");
     }
  
function setup() {
  createCanvas(800, 400);
  rojoyblanco = color(239, 239, 239);
}


function draw() {
 background(239);
    image(opart, 0, 0, 400, 400);
    dibujargrilla(cant);
}
