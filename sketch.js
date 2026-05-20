function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

let spacing = 40;
let circleSize = 20;
let mode = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(20);

  // tamaño cambia con mouse
  circleSize = map(mouseX, 0, width, 10, 60);

  // grilla
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {

      let distance = dist(mouseX, mouseY, x, y);

      // colores
      if (mode === 0) {
        fill(255, 0, 0);       // rojo
      } else if (mode === 1) {
        fill(255, 255, 0);     // amarillo
      } else if (mode === 2) {
        fill(0, 150, 255);     // azul
      } else if (mode === 3) {
        fill(0, 255, 100);     // verde
      } else if (mode === 4) {
        fill(255, 100, 200);   // rosado
      } else {
        fill(100, 255, 255);   // celeste
      }

      noStroke();

      let size = map(distance, 0, 500, circleSize, 5);

      // mezcla círculos y cuadrados
      if ((x + y) % 80 === 0) {
        ellipse(x, y, size, size); // círculo
      } else {
        rect(x - size / 2, y - size / 2, size, size); // cuadrado
      }
    }
  }
}

// cambia color con cualquier tecla
function keyPressed() {
  mode++;

  if (mode > 5) {
    mode = 0;
  }
}
