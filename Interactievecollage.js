function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(173, 216, 230);
  drawCloud(150, 120, 1.2);
  drawCloud(400, 80, 0.9);
  drawCloud(600, 160, 1.5);
}

function drawCloud(x, y, scale) {
  noStroke();
  fill(255, 255, 255, 230);
  ellipse(x, y, 60 * scale, 50 * scale);
  ellipse(x + 25 * scale, y + 10 * scale, 50 * scale, 40 * scale);
  ellipse(x - 25 * scale, y + 10 * scale, 50 * scale, 40 * scale);
  ellipse(x, y + 20 * scale, 55 * scale, 35 * scale);
}
