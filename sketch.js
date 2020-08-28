var bullet, wall;
var speed, weight;
var de;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90)
  weight = random(400, 1500)
  bullet = createSprite(50, 10, 100, 100, 25)
  bullet.shapeColor = "white";
  thickness = random(22, 83);
  wall = createSprite(200, 400, thickness, height/2)
  wall.shapeColor("#666666")
  bullet.velocityX = speed;
  weight = random(30, 51);
  speed = random(223, 321)
}

function draw() {
  background(255,255,255);
  
  if(wall.x - bullet.x < wall.width/2 + bullet.x/2){
    de = (weight*speed*speed*0.5)/thickness**3
    if(de<10){
      bullet.shapeColor = "green"
    } else{
      bullet.shapeColor = "red"
    }
 
  }
  drawSprites();
}