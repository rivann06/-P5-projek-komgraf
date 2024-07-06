//Rivan Faitulloh
function setup() {
  createCanvas(630, 360, WEBGL);
}
function preload(){
  bumi = loadImage('bumi.jpg');
  bulan = loadImage('bulan.jpg');

}
function draw() {
  background(50);
  texture(bumi);
  orbitControl();
  rotateY(millis()/2500);
  sphere(100);
  rotateY(millis()/300);
  translate(10,10,150);
  texture(bulan);
  sphere(30);
  noStroke();
}
