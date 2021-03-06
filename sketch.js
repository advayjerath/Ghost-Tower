var tower,towerImg
var door,doorImg,doorGroup
var climber,climberImg,climberGroup
var ghost,ghostImg

function preload(){
  
  towerImg=loadImage("tower.png")
  doorImg=loadImage("door.png")
  climberImg=loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png")
  
}
function setup(){
 createCanvas(600,600);
  
  tower=createSprite(300,300)
  tower.addImage("tower",towerImg);
  tower.velocityY=1
  
  doorGroup=new Group()
  climberGroup=new Group()
  
  ghost=createSprite(200,200)
  ghost.addImage("ghost",ghostImg)
  ghost.scale=0.5
  
}
function draw(){
  background("red")
  
  if(tower.y>400){
    tower.y=300
  }
  if(keyDown("left_arrow"))
  { ghost.x = ghost.x - 3; }
  if(keyDown("right_arrow"))
  { ghost.x = ghost.x + 3; }
  if(keyDown("space")){ghost.velocityY = -10; }      ghost.velocityY = ghost.velocityY +  0.8
  
  spawndoors()
  drawSprites();
  
}

function spawndoors(){
  
  if(frameCount%240===0){
    
    door=createSprite(200,50)
    door.addImage(doorImg)
    door.x=Math.round(random(120,400))
    door.velocityY=1
    doorGroup.add(door)
    door.lifetime=600
    
    climber=createSprite(200,100)
    climber.addImage(climberImg)
    climber.x=door.x
    climber.velocityY=1
    climberGroup.add(climber)
    climber.lifetime=600
    
    ghost.depth=door.depth
    ghost.depth+=1
  }
  
  
  
}