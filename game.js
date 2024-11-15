function setup() {
  createCanvas(800, 600);
}

// Let
let x = 200;
let y = 300;
let state = "start";
let gameWon = false;
let speed = 2;

// Function Screens
function startScreen() {
  button(x + 180, y + 90);
}

function gameScreen() {
  character(x, y);

  // the if statement that moves the emoji back and forth
  y = y + speed;
  if (y > 600 || y < 300) {
    speed = speed * -1;
  } else if (y === 600) {
    speed = 0;
  }
}

function resultScreen() {}

// Functions inside the screens
function button(x, y) {
  // The button
  push();
  fill(153, 204, 255);
  stroke(102, 178, 255);
  strokeWeight(4);
  rect(x - 170, y - 100, 290, 160);
  pop();

  // The balloon
  push();
  fill(255, 153, 204);
  noStroke();
  beginShape();
  vertex(x - 109, y + 9);
  bezierVertex(x - 194, y - 97, x - 10, y - 100, x - 109, y + 9);
  endShape();
  pop();

  // The string
  push();
  noFill();
  beginShape();
  vertex(x - 109, y + 9);
  bezierVertex(x - 69, y + 48, x - 60, y - 17, x + 10, y + 33);
  endShape();
  pop();

  // Text
  text("Click here", x - 55, y - 35, [100, 100]);
  textSize(30);
}

function character() {
  function house(x, y) {
    // The left side
    push();
    fill(102, 178, 255);
    noStroke();
    rect(x - 85, y + 45, 100, 35);
    pop();

    push();
    fill(255, 128, 0);
    noStroke();
    rect(x - 85, y + 80, 100, 55);
    pop();

    push();
    fill(102, 178, 255);
    noStroke();
    rect(x - 85, y + 135, 100, 20);
    pop();

    // The right side
    push();
    fill(255, 153, 204);
    noStroke();
    rect(x + 110, y + 40, 40, 115);
    triangle(x + 150, y + 85, x + 150, y + 65, x + 160, y + 75);
    pop();

    // Details on the left side, horizontal
    push();
    noStroke();
    fill(255, 255, 255);
    rect(x - 82, y + 78, 100, 2);
    rect(x - 82, y + 90, 100, 2);
    rect(x - 80, y + 135, 30, 2);
    rect(x - 80, y + 115, 30, 2);
    rect(x - 50, y + 135, 65, 2);
    pop();

    // The roof, right side
    push();
    fill(253, 52, 52);
    noStroke();
    quad(x + 75, y - 5, x + 115, y + 45, x + 165, y + 45, x + 165, y - 5);
    pop();

    // The roof, left side
    push();
    fill(253, 52, 52);
    noStroke();
    quad(x - 100, y, x + 37, y, x, y + 57, x - 100, y + 57);
    pop();

    // The big extension
    // The front
    push();
    fill(253, 220, 52);
    noStroke();
    triangle(x + 8, y + 45, x + 56, y - 30, x + 115, y + 45);
    rect(x + 8, y + 45, 107, 20);
    pop();

    push();
    fill(253, 220, 52);
    stroke(255, 255, 204);
    quad(x + 8, y + 65, x + 115, y + 65, x + 125, y + 75, x - 2, y + 75);
    quad(x - 2, y + 75, x + 125, y + 75, x + 115, y + 85, x + 8, y + 85);
    pop();

    // The window
    push();
    fill(255, 255, 255);
    noStroke();
    rect(x + 42, y + 10, 36, 50);
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(3);
    rect(x + 48, y + 15, 25, 40);
    line(x + 48, y + 35, x + 72, y + 35);
    pop();

    // The engled roof
    push();
    fill(102, 178, 255);
    stroke(0, 128, 255);
    quad(x - 10, y + 57, x, y + 57, x + 59, y - 25, x + 60, y - 40);
    quad(x + 120, y + 57, x + 60, y - 25, x + 61, y - 41, x + 130, y + 57);
    pop();

    // The little extension
    // The front
    push();
    fill(255, 128, 0);
    noStroke();
    triangle(x - 64, y + 25, x - 46, y + 15, x - 25, y + 25);
    rect(x - 64, y + 25, 39, 20);
    pop();

    // The window
    push();
    fill(255, 255, 255);
    noStroke();
    rect(x - 53, y + 24, 15, 18);
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(2);
    rect(x - 49.5, y + 27, 8, 12);
    line(x - 49, y + 33, x - 42, y + 33);
    pop();

    // The angled roof
    push();
    fill(102, 178, 255);
    stroke(0, 128, 204);
    quad(x - 79, y + 30, x - 46, y + 7, x - 46, y + 15, x - 70, y + 30);
    quad(x - 46, y + 15, x - 46, y + 7, x - 10, y + 30, x - 20, y + 30);
    pop();

    // The front under the big extension
    push();
    fill(204, 255, 153);
    stroke(178, 255, 102);
    quad(x + 8, y + 86, x + 42, y + 86, x + 42, y + 166, x + 8, y + 155);
    rect(x + 43, y + 86, 35, 80);
    quad(x + 79, y + 86, x + 115, y + 86, x + 115, y + 155, x + 79, y + 166);
    pop();

    // Details on the left side, vertical
    push();
    fill(255, 255, 255);
    noStroke();
    rect(x - 85, y + 57, 10, 98);
    rect(x - 52, y + 57, 8, 98);
    rect(x - 69, y + 117, 2, 20);
    rect(x - 60, y + 117, 2, 20);
    rect(x - 69, y + 80, 2, 10);
    rect(x - 60, y + 80, 2, 10);
    rect(x - 38, y + 80, 2, 10);
    rect(x - 29, y + 80, 2, 10);
    rect(x - 20, y + 80, 2, 10);
    rect(x - 11, y + 80, 2, 10);
    rect(x - 2, y + 80, 2, 10);
    pop();

    // The stairs
    push();
    fill(255, 255, 255);
    noStroke();
    rect(x - 35, y + 135, 2, 24);
    rect(x - 4, y + 135, 2, 24);
    rect(x - 35, y + 141, 33, 4);
    rect(x - 35, y + 148, 33, 4);
    rect(x - 35, y + 155, 33, 4);
    pop();

    // The door
    push();
    fill(100, 60, 34);
    noStroke();
    rect(x - 31, y + 100, 25, 35);
    pop();

    // The door handle
    push();
    fill(0, 0, 0);
    ellipse(x - 13, y + 120, 5);
    pop();

    // The windows, front under the big extension
    // Middle window
    push();
    fill(255, 255, 255);
    noStroke();
    rect(x + 48, y + 100, 25, 40);
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(3);
    rect(x + 53, y + 105, 15, 30);
    line(x + 55, y + 120, x + 68, y + 120);
    pop();

    // The left
    push();
    fill(255, 255, 255);
    noStroke();
    quad(x + 35, y + 100, x + 35, y + 138, x + 15, y + 130, x + 15, y + 96);
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(3);
    quad(x + 30, y + 105, x + 30, y + 130, x + 20, y + 126, x + 20, y + 103);
    line(x + 20, y + 115, x + 29, y + 118);
    pop();

    // The right
    push();
    fill(255, 255, 255);
    noStroke();
    quad(x + 87, y + 100, x + 87, y + 138, x + 108, y + 130, x + 108, y + 96);
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(3);
    quad(x + 93, y + 105, x + 93, y + 130, x + 102, y + 126, x + 102, y + 103);
    line(x + 100, y + 115, x + 93, y + 118);
    pop();

    // The chimney
    push();
    fill(100, 60, 34);
    noStroke();
    rect(x - 10, y - 40, 20, 50);
    rect(x - 14, y - 40, 28, 10);
    pop();
  }

  function balloon(balloonX, balloonY, angle, fillColor, strokeColor) {
    // 246 and 247, got help from a secondyear NMD student
    push();
    fill(fillColor);
    stroke(strokeColor);
    translate(balloonX, balloonY);
    rotate(angle);
    beginShape();
    vertex(0, 0);
    bezierVertex(-101, -105, +99, -105, 0, 0);
    endShape();
    pop();

    push();
    stroke(0, 0, 0);
    line(x, y - 35, balloonX, balloonY);
    pop();
  }

  // Calling the balloons
  // Orange left
  balloon(x - 10, y - 175, 0.2, color(255, 204, 153), color(255, 204, 153));

  // Orange right
  balloon(
    x + 50,
    y + 45 - 175,
    0.3,
    color(255, 204, 153),
    color(255, 204, 153)
  );

  // Green left
  balloon(x, y - 75, 0, color(153, 255, 153), color(102, 255, 102));

  // Green right
  balloon(x + 30, y - 150, 0.2, color(153, 255, 153), color(102, 255, 102));

  // Blue right
  balloon(
    x + 50,
    y + 80 - 175,
    0.6,
    color(153, 204, 255),
    color(102, 178, 255)
  );

  // Blue left
  balloon(x - 10, y + 50 - 175, 0, color(153, 204, 255), color(102, 178, 255));

  // Yellow right
  balloon(x + 20, y - 75, 0.6, color(255, 255, 153), color(255, 255, 102));

  // Yellow left
  balloon(
    x - 30,
    y - 5 - 135,
    -0.3,
    color(255, 255, 153),
    color(255, 255, 102)
  );

  // Pink left
  balloon(
    x - 20,
    y + 90 - 175,
    -0.6,
    color(255, 153, 204),
    color(255, 162, 170)
  );

  // Pink right
  balloon(x + 20, y - 105, 0.2, color(255, 153, 204), color(255, 162, 170));

  // Calling the house
  house(x, y);
}

function end() {}

function resultText(t) {
  // Text
  text(t, x + 35, y + 55, [100, 100]);
  text(t, x - 54, y + (55)[(100, 100)]);
  textSize(30);
}

// The comands
function mouseClicked() {
  if (mouseX > 165 && mouseX < 400 && mouseY > 230 && mouseY < 360) {
    console.log("start");
    if (state === "start") {
      state = "Play game";
    } else if (state === "result") {
      state = "start";
    }
  }
}

function keyPressed() {
  // do something
}

function keyReleased() {
  // do something
}

function draw() {
  background(193, 204, 255);
  scale(0.8);

  // If statements
  // Screens
  if (state === "start") {
    startScreen();
  } else if (state === "Play game") {
    gameScreen();
  } else if (state === "result") {
    gameWon = true;
  }

  // Result
  if (state === "result") {
    if (gameWon === true) {
      resultText("You win, you're doing great honey");
    } else if (gameWon === false) {
      resultText("You die, you suck");
    }
  }

  // Keys
  if (keyIsDown) {
  }
}
