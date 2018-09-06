function setup() {
  createCanvas(400, 320);
}

function draw() {
  background(255, 255, 255);

  noStroke()

  //1px in pepeL = 40px
  //Blue T-shirt
  fill(0,66,254);
  rect(0, 280, 280, 40);

  //Green Pepe
  fill(86,141,55);
  rect(0, 240, 280, 40);

  //green skin with red mouth
  rect(0, 200, 320, 40);
  //mouth
  fill(170,86,54)
  rect(160, 200, 160, 40);

  //nose
  fill(86,141,55)
  rect(40, 160, 280, 40);

  //green skin and eyes
  rect(40, 120, 320, 40);
  
  //white eyes
  fill(255);
  rect(120, 120, 200, 40);
  
  //black eyes
  fill(0);
  rect(160, 120, 40, 40);
  rect(280, 120, 40, 40);
  
  //4Head
  fill(86,141,55);
  rect(80, 80, 280, 40);
  
  
  //eyebrows
  rect(120, 40, 80, 40);
  rect(240, 40, 80, 40);
  
  
  
}