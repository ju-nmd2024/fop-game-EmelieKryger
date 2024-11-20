// Game - let the house land on the cloud
// Emelie Kryger - krem24oj

// Varibles
let x = 200;
let y = 300;
let buttonX = 200;
let buttonY = 300;
let houseX = 200;
let houseY = 300;
let state = "start";
let gameWon = false;
let winningScreenTimer = 0;

//Game logic varibles
let velocityY = 3;
let acceleration = 0.5;

function setup() {
  createCanvas(800, 700);
}
// Function Screens
function startScreen() {
  button(buttonX + 180, buttonY + 90);

  // Instruction for the user
  textAlign(CENTER);
  textSize(30);
  text("To steer the house, use the space key", 510, 600);
  text("Good Luck", 505, 650);
}

function gameScreen() {
  character(x, y);

  // The if statement that moves the character upp and down
  if (houseY > 560) {
    velocityY = 0;
  }

  // Gravity logic house
  houseY = houseY + velocityY;
  velocityY = velocityY + acceleration;

  // Space key - controls the accelaration
  if (keyIsDown(32) === true) {
    acceleration = -0.15;
  } else {
    acceleration = 0.1;
  }

  // Game over
  if (houseY >= 560) {
    if (velocityY <= 3) {
      gameWon = true;
    } else if (velocityY > 3) {
      gameWon = false;
    }
    state = "result";
  }

  background_character(500, 800);
}

function resultScreen() {
  // Result
  if (gameWon === true) {
    resultText("You win, you're doing great honey");
    winningScreenTimer = winningScreenTimer + 1;
    if (winningScreenTimer > 50) {
      state = "start";
      resetGame();
    }
  } else if (gameWon === false) {
    resultText("You die, you suck");
    replayButton();
  }
}

function resetGame() {
  houseY = 0;
  velocityY = 0;
  acceleration = 0.1;
  winningScreenTimer = 0;
}

// Functions inside the screens
function button(x, y) {
  // The button
  push();
  fill(153, 204, 255);
  stroke(102, 178, 255);
  strokeWeight(4);
  rect(x - 20, y - 45, 290, 160);
  pop();

  // The balloon
  push();
  translate(150, 50);
  fill(255, 153, 204);
  noStroke();
  beginShape();
  vertex(x - 109, y + 9);
  bezierVertex(x - 194, y - 97, x - 10, y - 100, x - 109, y + 9);
  endShape();
  pop();

  // The string
  push();
  translate(150, 50);
  noFill();
  beginShape();
  vertex(x - 109, y + 9);
  bezierVertex(x - 69, y + 48, x - 60, y - 17, x + 10, y + 33);
  endShape();
  pop();

  // Text
  fill(0, 0, 0);
  textSize(30);
  text("Play Game", x + 90, y + 10, [100, 100]);
}

function replayButton() {
  // The button
  push();
  fill(153, 204, 255);
  stroke(102, 178, 255);
  strokeWeight(4);
  rect(500 - 150, 395, 300, 160);
  pop();

  // Text
  textAlign(CENTER);
  textSize(30);
  text("Restart game", 500, 482);

  if (
    mouseIsPressed &&
    mouseX > 280 &&
    mouseX < 520 &&
    mouseY > 315 &&
    mouseY < 445
  ) {
    state = "Play game";
    resetGame();
  }
}

function character() {
  function house(houseX, houseY) {
    // The left side
    push();
    fill(102, 178, 255);
    noStroke();
    rect(houseX - 85, houseY + 45, 100, 35);
    pop();

    push();
    fill(255, 128, 0);
    noStroke();
    rect(houseX - 85, houseY + 80, 100, 55);
    pop();

    push();
    fill(102, 178, 255);
    noStroke();
    rect(houseX - 85, houseY + 135, 100, 20);
    pop();

    // The right side
    push();
    fill(255, 153, 204);
    noStroke();
    rect(houseX + 110, houseY + 40, 40, 115);
    triangle(
      houseX + 150,
      houseY + 85,
      houseX + 150,
      houseY + 65,
      houseX + 160,
      houseY + 75
    );
    pop();

    // Details on the left side, horizontal
    push();
    noStroke();
    fill(255, 255, 255);
    rect(houseX - 82, houseY + 78, 100, 2);
    rect(houseX - 82, houseY + 90, 100, 2);
    rect(houseX - 80, houseY + 135, 30, 2);
    rect(houseX - 80, houseY + 115, 30, 2);
    rect(houseX - 50, houseY + 135, 65, 2);
    pop();

    // The roof, right side
    push();
    fill(253, 52, 52);
    noStroke();
    quad(
      houseX + 75,
      houseY - 5,
      houseX + 115,
      houseY + 45,
      houseX + 165,
      houseY + 45,
      houseX + 165,
      houseY - 5
    );
    pop();

    // The roof, left side
    push();
    fill(253, 52, 52);
    noStroke();
    quad(
      houseX - 100,
      houseY,
      houseX + 37,
      houseY,
      houseX,
      houseY + 57,
      houseX - 100,
      houseY + 57
    );
    pop();

    // The big extension
    // The front
    push();
    fill(253, 220, 52);
    noStroke();
    triangle(
      houseX + 8,
      houseY + 45,
      houseX + 56,
      houseY - 30,
      houseX + 115,
      houseY + 45
    );
    rect(houseX + 8, houseY + 45, 107, 20);
    pop();

    push();
    fill(253, 220, 52);
    stroke(255, 255, 204);
    quad(
      houseX + 8,
      houseY + 65,
      houseX + 115,
      houseY + 65,
      houseX + 125,
      houseY + 75,
      houseX - 2,
      houseY + 75
    );
    quad(
      houseX - 2,
      houseY + 75,
      houseX + 125,
      houseY + 75,
      houseX + 115,
      houseY + 85,
      houseX + 8,
      houseY + 85
    );
    pop();

    // The window
    push();
    fill(255, 255, 255);
    noStroke();
    rect(houseX + 42, houseY + 10, 36, 50);
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(3);
    rect(houseX + 48, houseY + 15, 25, 40);
    line(houseX + 48, houseY + 35, houseX + 72, houseY + 35);
    pop();

    // The engled roof
    push();
    fill(102, 178, 255);
    stroke(0, 128, 255);
    quad(
      houseX - 10,
      houseY + 57,
      houseX,
      houseY + 57,
      houseX + 59,
      houseY - 25,
      houseX + 60,
      houseY - 40
    );
    quad(
      houseX + 120,
      houseY + 57,
      houseX + 60,
      houseY - 25,
      houseX + 61,
      houseY - 41,
      houseX + 130,
      houseY + 57
    );
    pop();

    // The little extension
    // The front
    push();
    fill(255, 128, 0);
    noStroke();
    triangle(
      houseX - 64,
      houseY + 25,
      houseX - 46,
      houseY + 15,
      houseX - 25,
      houseY + 25
    );
    rect(houseX - 64, houseY + 25, 39, 20);
    pop();

    // The window
    push();
    fill(255, 255, 255);
    noStroke();
    rect(houseX - 53, houseY + 24, 15, 18);
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(2);
    rect(houseX - 49.5, houseY + 27, 8, 12);
    line(houseX - 49, houseY + 33, houseX - 42, houseY + 33);
    pop();

    // The angled roof
    push();
    fill(102, 178, 255);
    stroke(0, 128, 204);
    quad(
      houseX - 79,
      houseY + 30,
      houseX - 46,
      houseY + 7,
      houseX - 46,
      houseY + 15,
      houseX - 70,
      houseY + 30
    );
    quad(
      houseX - 46,
      houseY + 15,
      houseX - 46,
      houseY + 7,
      houseX - 10,
      houseY + 30,
      houseX - 20,
      houseY + 30
    );
    pop();

    // The front under the big extension
    push();
    fill(204, 255, 153);
    stroke(178, 255, 102);
    quad(
      houseX + 8,
      houseY + 86,
      houseX + 42,
      houseY + 86,
      houseX + 42,
      houseY + 166,
      houseX + 8,
      houseY + 155
    );
    rect(houseX + 43, houseY + 86, 35, 80);
    quad(
      houseX + 79,
      houseY + 86,
      houseX + 115,
      houseY + 86,
      houseX + 115,
      houseY + 155,
      houseX + 79,
      houseY + 166
    );
    pop();

    // Details on the left side, vertical
    push();
    fill(255, 255, 255);
    noStroke();
    rect(houseX - 85, houseY + 57, 10, 98);
    rect(houseX - 52, houseY + 57, 8, 98);
    rect(houseX - 69, houseY + 117, 2, 20);
    rect(houseX - 60, houseY + 117, 2, 20);
    rect(houseX - 69, houseY + 80, 2, 10);
    rect(houseX - 60, houseY + 80, 2, 10);
    rect(houseX - 38, houseY + 80, 2, 10);
    rect(houseX - 29, houseY + 80, 2, 10);
    rect(houseX - 20, houseY + 80, 2, 10);
    rect(houseX - 11, houseY + 80, 2, 10);
    rect(houseX - 2, houseY + 80, 2, 10);
    pop();

    // The stairs
    push();
    fill(255, 255, 255);
    noStroke();
    rect(houseX - 35, houseY + 135, 2, 24);
    rect(houseX - 4, houseY + 135, 2, 24);
    rect(houseX - 35, houseY + 141, 33, 4);
    rect(houseX - 35, houseY + 148, 33, 4);
    rect(houseX - 35, houseY + 155, 33, 4);
    pop();

    // The door
    push();
    fill(100, 60, 34);
    noStroke();
    rect(houseX - 31, houseY + 100, 25, 35);
    pop();

    // The door handle
    push();
    fill(0, 0, 0);
    ellipse(houseX - 13, houseY + 120, 5);
    pop();

    // The windows, front under the big extension
    // Middle window
    push();
    fill(255, 255, 255);
    noStroke();
    rect(houseX + 48, houseY + 100, 25, 40);
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(3);
    rect(houseX + 53, houseY + 105, 15, 30);
    line(houseX + 55, houseY + 120, houseX + 68, houseY + 120);
    pop();

    // The left
    push();
    fill(255, 255, 255);
    noStroke();
    quad(
      houseX + 35,
      houseY + 100,
      houseX + 35,
      houseY + 138,
      houseX + 15,
      houseY + 130,
      houseX + 15,
      houseY + 96
    );
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(3);
    quad(
      houseX + 30,
      houseY + 105,
      houseX + 30,
      houseY + 130,
      houseX + 20,
      houseY + 126,
      houseX + 20,
      houseY + 103
    );
    line(houseX + 20, houseY + 115, houseX + 29, houseY + 118);
    pop();

    // The right
    push();
    fill(255, 255, 255);
    noStroke();
    quad(
      houseX + 87,
      houseY + 100,
      houseX + 87,
      houseY + 138,
      houseX + 108,
      houseY + 130,
      houseX + 108,
      houseY + 96
    );
    pop();

    push();
    fill(0, 0, 0);
    stroke(255, 153, 204);
    strokeWeight(3);
    quad(
      houseX + 93,
      houseY + 105,
      houseX + 93,
      houseY + 130,
      houseX + 102,
      houseY + 126,
      houseX + 102,
      houseY + 103
    );
    line(houseX + 100, houseY + 115, houseX + 93, houseY + 118);
    pop();

    // The chimney
    push();
    fill(100, 60, 34);
    noStroke();
    rect(houseX - 10, houseY - 40, 20, 50);
    rect(houseX - 14, houseY - 40, 28, 10);
    pop();
  }

  function balloon(balloonX, balloonY, angle, fillColor, strokeColor) {
    push();
    fill(fillColor);
    stroke(strokeColor);
    translate(balloonX, balloonY);
    rotate(angle);
    beginShape();
    //Start help, got help from a secondyear NMD student
    vertex(0, 0);
    bezierVertex(-101, -105, +99, -105, 0, 0);
    //End help, got help from a secondyear NMD student
    endShape();
    pop();

    push();
    stroke(0, 0, 0);
    line(x, houseY - 35, balloonX, balloonY);
    pop();
  }

  // Calling the balloons
  push();
  translate(270, 0);
  // Orange left
  balloon(
    houseX - 10,
    houseY - 175,
    0.2,
    color(255, 204, 153),
    color(255, 204, 153)
  );

  // Orange right
  balloon(
    houseX + 50,
    houseY + 45 - 175,
    0.3,
    color(255, 204, 153),
    color(255, 204, 153)
  );

  // Green left
  balloon(houseX, houseY - 75, 0, color(153, 255, 153), color(102, 255, 102));

  // Green right
  balloon(
    houseX + 30,
    houseY - 150,
    0.2,
    color(153, 255, 153),
    color(102, 255, 102)
  );

  // Blue right
  balloon(
    houseX + 50,
    houseY + 80 - 175,
    0.6,
    color(153, 204, 255),
    color(102, 178, 255)
  );

  // Blue left
  balloon(
    houseX - 10,
    houseY + 50 - 175,
    0,
    color(153, 204, 255),
    color(102, 178, 255)
  );

  // Yellow right
  balloon(
    houseX + 20,
    houseY - 75,
    0.6,
    color(255, 255, 153),
    color(255, 255, 102)
  );

  // Yellow left
  balloon(
    houseX - 30,
    houseY - 140,
    -0.3,
    color(255, 255, 153),
    color(255, 255, 102)
  );

  // Pink left
  balloon(
    houseX - 20,
    houseY + 90 - 175,
    -0.6,
    color(255, 153, 204),
    color(255, 162, 170)
  );

  // Pink right
  balloon(
    houseX + 20,
    houseY - 105,
    0.2,
    color(255, 153, 204),
    color(255, 162, 170)
  );
  pop();

  // Calling the house
  house(houseX + 270, houseY);
}

function background_character(x, y) {
  function cloud() {
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(x, y, 120, 80);
    ellipse(x - 20, y - 40, 120, 80);
    ellipse(x - 80, y - 10, 120, 80);
    ellipse(x + 70, y - 25, 120, 80);
    ellipse(x + 35, y - 60, 120, 80);
    ellipse(x + 135, y - 10, 120, 80);
    ellipse(x - 180, y - 30, 120, 80);
    ellipse(x - 130, y - 60, 120, 80);
    ellipse(x - 30, y - 70, 120, 80);
    ellipse(x + 110, y - 60, 120, 80);
    ellipse(x + 40, y - 60, 120, 80);
    ellipse(x + 190, y - 35, 120, 80);
    pop();
  }

  function gate() {
    push();
    scale(1, 0.6);
    translate(0, 480);
    // Lines
    push();
    stroke(255, 255, 255);
    strokeWeight(3);
    for (let i = 0; i < 15; i++) {
      // Left
      line(x - 200 + i * 10, y - 50, x - 200 + i * 10, y - 150 - i * 5);
      // Right
      line(x + 210 - i * 10, y - 50, x + 210 - i * 10, y - 150 - i * 5);
    }
    // Left line, diagonal
    line(x - 200, y - 125, x - 60, y - 195);
    // Right line, diagonal
    line(x + 70, y - 195, x + 210, y - 125);
    pop();

    // The actual gate, from left to right
    push();
    fill(255, 255, 255);
    noStroke();
    quad(x - 53, y - 200, x - 28, y - 212, x - 28, y - 90, x - 53, y - 90);

    beginShape();
    vertex(x + 7, y - 200);
    vertex(x + 7, y - 90);
    vertex(x + 32, y - 90);
    vertex(x + 32, y - 215);
    vertex(x + 15, y - 225);
    bezierVertex(x + 23, y - 221, x + 23, y - 200, x + 7, y - 200);
    endShape();

    push();
    scale(-1, 1);
    translate(x - 1509, 0);
    beginShape();
    vertex(x + 7, y - 200);
    vertex(x + 7, y - 90);
    vertex(x + 32, y - 90);
    vertex(x + 32, y - 215);
    vertex(x + 15, y - 225);
    bezierVertex(x + 23, y - 221, x + 23, y - 200, x + 7, y - 200);
    endShape();
    pop();

    quad(x + 63, y - 198, x + 37, y - 212, x + 37, y - 90, x + 63, y - 90);
    pop();
    pop();
  }

  // Calling cloud and gate
  cloud(x, y);
  gate(x, y);
}

function resultText(t) {
  // Text
  textAlign(CENTER);
  textSize(30);
  text(t, 500, 350);
}

// The comands
function mouseClicked() {
  if (mouseX > 290 && mouseX < 520 && mouseY > 275 && mouseY < 405) {
    console.log("start");
    if (state === "start") {
      state = "Play game";
    } else if (state === "result" && gameWon === true) {
      state = "start";
    }
  }
}

function keyPressed() {
  console.log("Key " + keyCode + " has been pressed");
  if (key === "32") {
  }
}

function keyReleased() {
  console.log("Key " + keyCode + " has been released");
}

function draw() {
  push();
  background(193, 204, 255);
  scale(0.8);

  // If statements
  // Start
  if (state === "start") {
    startScreen();
  } else if (state === "Play game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  } else if (state === "reset") {
    resetGame();
  }
  pop();
}
