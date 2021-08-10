var garden,rabbit;
var gardenImg,rabbitImg;
var leaves,orangeleaves,redleaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  greenImg = loadImage("leaf.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);

  rabbit.x=World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprite=Math.round(random(1,4));
  if(frameCount % 80==0){
    if(select_sprite==1){
    
      createApples()
    }
    else if (select_sprite==2){
      createleaves();
    }
    else if (select_sprite==3){
      Createaorangeleaf();
    }else{
      Createredleaf();
    }}
  drawSprites();
}

function createleaves(){

leaves=createSprite(random(50,350),40,10,10);
  leaves.addImage(greenImg);
  leaves.scale=0.1;
  leaves.velocityY=1;
  leaves.lifetime=100;
}
function Createaorangeleaf(){

orangeleaf=createSprite(random(50,350),40,10,10);
orangeleaf.addImage(orangeImg);
orangeleaf.scale=0.1;
orangeleaf.velocityY=1;
orangeleaf.lifetime=100;
}
  function Createredleaf(){

  redleaf=createSprite(random(50,350),40,10,10);
  redleaf.addImage(redImg);
  redleaf.scale=0.1;
  redleaf.velocityY=1;
  redleaf.lifetime=100;
  }
  
  
  function createApples(){
    apple=createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale=0.1;
    apple.velocityY=1;
    apple.lifetime=100;
    
  }