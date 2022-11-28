var x = 0,
  y = 0;
var stepSize = 5.0;
var letters = "ECHO";
var fontSizeMin = 9;
var angleDistortion = 0.5;
var counter = 0;
var can_write = 1;

let img6;

function preload() {
  img6 = loadImage("./assets/images/ForestaSfondoTemporaneo.jpg");
}

function setup() {
  // use full screen size
  container = createElement("div");
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(container);

  push();
  tint(255, 150); // Display at half opacity
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img6.width, height / img6.height);
  image(img6, 0, 0, img6.width * scale, img6.height * scale);
  pop();

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
    textFont("Georgia");
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
  push();
  resizeCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  translate(width / 2, height / 2);
  let scale = Math.max(width / img6.width, height / img6.height);
  tint(255, 150); // Display at half opacity
  bg = image(img6, 0, 0, img6.width * scale, img6.height * scale);
  background(bg);
  pop();
}

document.getElementById("schermata").onclick = function () {
  document.getElementById("schermata").style.display = "none";
};
