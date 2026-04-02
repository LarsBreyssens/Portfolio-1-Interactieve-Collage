function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(173, 216, 230);
  drawMountains();

  drawCloud(150, 120, 1.2);
  drawCloud(400, 80, 0.9);
  drawCloud(600, 160, 1.5);

  function drawMountains() {
    noStroke();
    fill(120, 170, 200);
    triangle(0, 500, 200, 200, 400, 500);

    fill(100, 140, 180);
    triangle(300, 500, 500, 250, 700, 500);

    fill(80, 120, 160);
    triangle(600, 500, 750, 300, 900, 500);

    fill(150, 200, 220);
    triangle(100, 600, 350, 350, 600, 600);
  }
}

function drawCloud(x, y, scale) {
  noStroke();
  fill(255, 255, 255, 230);
  ellipse(x, y, 60 * scale, 50 * scale);
  ellipse(x + 25 * scale, y + 10 * scale, 50 * scale, 40 * scale);
  ellipse(x - 25 * scale, y + 10 * scale, 50 * scale, 40 * scale);
  ellipse(x, y + 20 * scale, 55 * scale, 35 * scale);
}

if (zee) {
  image(zee, 0, 500, width, 100);
}

let zee;

function preload() {
  zee = loadImage("images/zee.png");
}
