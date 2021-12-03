var box;


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "";
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    background("#bf1f54");
    box.position.x = box.position.x +5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x -5;
    background("#96fa87");
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y -5;
    background("#f71e1e");
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y +5;
    background("#7b6dd6")
  }
  drawSprites();

}




