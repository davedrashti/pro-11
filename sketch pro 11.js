var sea,ship;
var seaImg,shipImg;

function preload(){
  shipImg1=loadAnimation("sea.png")

  loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  loadAnimation("ship-1","ship-1","ship-2","ship-1");
   

}

function setup(){
  createCanvas(600,600);
  background("blue");


  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);

  sea.velocityY = -3;
  sea.velocityx = -3;
  sea.velocityX = -3;
  sea.velocityX = 3;
  

  
    
  drawSprites();
}
