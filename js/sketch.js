function setup() {
  createCanvas(800, 800);
  background(255);
  noLoop();
  noStroke();
}
function draw() {
  const CELLSIZE = 20;
  let x = 0;
  let y = 0;
  while (y < height) {
    while (x < width) {
      fill(getRandomColour());
      square(x, y, CELLSIZE);
      fill(getRandomColour());
      circle(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE/2);
      x += CELLSIZE;
    }
    x = 0;
    y += CELLSIZE;
  }
}
function getRandomColour() {
  const R = random(255);
  const G = random(255);
  const B = random(255);
  return color(R, G, B);
}
