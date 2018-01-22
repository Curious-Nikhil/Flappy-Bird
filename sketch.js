var bird;

function setup() {
  createCanvas(300, 600);
  bird = new Bird();
}

function draw() {
background(10);
fill(200);

bird.show();
}
