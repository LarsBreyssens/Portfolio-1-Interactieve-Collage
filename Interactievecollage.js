function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(173, 216, 230);

  drawMountains();

  drawHoverCloud(150, 120, 1.2);
  drawHoverCloud(400, 80, 0.9);
  drawHoverCloud(600, 160, 1.5);

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

function drawHoverCloud(x, y, scale) {
  let over = dist(mouseX, mouseY, x, y) < 50 * scale + 20;
  let s = scale;
  if (over) {
    s *= 1.25;
  }
  noStroke();
  fill(255, 255, 255, 230);
  ellipse(x, y, 60 * s, 50 * s);
  ellipse(x + 25 * s, y + 10 * s, 50 * s, 40 * s);
  ellipse(x - 25 * s, y + 10 * s, 50 * s, 40 * s);
  ellipse(x, y + 20 * s, 55 * s, 35 * s);
}
