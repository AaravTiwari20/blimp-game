var blimp,blimpimage,sky,skyimage,bird,bird1,bird2,bird3,bird4,bird5,coin,coinimage;

function preload(){
blimpimage = loadImage("Blimp.png");
skyimage = loadImage("sky.png");
bird = loadAnimation("bird1.png","bird2.png","bird3.png")
}
function setup() {
  createCanvas(displayWidth-70,displayHeight-50);

  sky = createSprite(0,0,displayWidth-70,displayHeight-50);
  sky.addImage(skyimage);
  sky.scale=2.5;
  sky.velocityX=-4;

  blimp = createSprite(100,300);
  blimp.addImage(blimpimage);
  blimp.scale=1.5;
  
}

function draw() {


  if(sky.x<0){
  sky.x=sky.width/2;
  }

  if(keyDown("space")){
  blimp.velocityY=-10;
  }
  blimp.velocityY = blimp.velocityY+0.5 
  background(0);  
  drawSprites();

}