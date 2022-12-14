var x = 0,
  y = 0;
var stepSize = 5.0;
var letters = "ECHO";
var fontSizeMin = 9;
var angleDistortion = 0.5;
var counter = 0;
var can_write = 1;

let img6;
let mySound;
let mySound2;
let mySound3;

function preload() {
  mySound = loadSound("./assets/music/Forest.mp3");
  mySound2 = loadSound("./assets/music/Drop.mp3");
  mySound3 = loadSound("./assets/music/radio.mp3");
}

function setup() {
  // use full screen size
  container = createElement("div");
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(container);
  background("#F2F2F2");

  smooth();
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);
}

function mousePressed() {
  can_write = 0;
}

function mouseReleased() {
  can_write = 1;
}

function draw() {
  if (mouseOver) {
    var d = dist(x, y, mouseX, mouseY);
    textFont("Ortica");
    textSize(fontSizeMin + d / 2);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));

      if (can_write == 1) {
        text(newLetter, 0, 0);
      }
      pop();

      counter++;
      if (counter > letters.length - 1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }

  if (frameCount < 20) {
    mySound.stop();
    mySound2.stop();
    mySound3.stop();
  }

  if (mySound.isPlaying() === false) {
    mySound.play();
    mySound.setVolume(0.3);
  }
  if (mySound2.isPlaying() === false) {
    mySound2.play();
    mySound2.setVolume(0.1);
  }
  if (mySound3.isPlaying() === false) {
    mySound3.play();
    mySound3.setVolume(0.1);
  }
}

function mousePressed() {
  push();
  noFill();
  stroke("White");
  strokeWeight(random(1, 3));
  ellipseMode(CENTER);

  ellipse(mouseX, mouseY, random(50, 100));
  ellipse(mouseX + 10, mouseY + 10, random(100, 150));
  ellipse(mouseX - 5, mouseY - 5, random(150, 250));
  ellipse(mouseX, mouseY, random(250, 350));
  pop();
}

function mouseOver() {
  x = mouseX;
  y = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("#F2F2F2");
}

document.getElementById("schermata2").onclick = function () {
  document.getElementById("schermata2").style.display = "none";
};
