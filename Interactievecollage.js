function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(173, 216, 230);

  drawMountains();

  drawHoverCloud(150, 120, 1.2);
  drawHoverCloud(400, 80, 0.9);
  drawHoverCloud(600, 160, 1.5);

  drawSea();
  drawSeaLight();

  let vogelX = 0;
  drawBird(vogelX, 60);
  vogelX += 2;
  if (vogelX > width + 40) {
    vogelX = -40;
  }

  function drawBird(x, y) {
    push();
    stroke(60, 60, 60);
    strokeWeight(3);
    noFill();

    beginShape();
    vertex(x - 20, y + 5);
    vertex(x, y);
    vertex(x + 20, y + 5);
    endShape();
    pop();
  }

  function drawSea() {
    noStroke();
    fill(0, 105, 180, 220);
    let waveHeight = 28;
    let waveLength = 120;
    let speed = millis() * 0.002;
    let seaTop = height - 140;
    beginShape();
    vertex(0, height);
    for (let x = 0; x <= width; x += 10) {
      let y = seaTop + sin((x / waveLength) * TWO_PI + speed) * waveHeight;
      vertex(x, y);
    }
    vertex(width, height);
    endShape(CLOSE);
  }

  function drawSeaLight() {
    noStroke();
    fill(100, 180, 230, 180);
    let waveHeight = 18;
    let waveLength = 90;
    let speed = millis() * 0.002 + 100;
    let seaTop = height - 80;
    beginShape();
    vertex(0, height);
    for (let x = 0; x <= width; x += 10) {
      let y = seaTop + sin((x / waveLength) * TWO_PI + speed) * waveHeight;
      vertex(x, y);
    }
    vertex(width, height);
    endShape(CLOSE);
  }

  function drawMountains() {
    noStroke();
    fill(220, 270, 100);
    triangle(0, 500, 200, 200, 400, 500);

    fill(200, 240, 180);
    triangle(300, 500, 500, 250, 700, 500);

    fill(180, 220, 240);
    triangle(600, 500, 750, 300, 900, 500);

    fill(250, 300, 220);
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
