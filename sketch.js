var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  o1 = createSprite(100,200,50,50)
  o1.shapeColor= "yellow"
  o2 = createSprite(200,200,50,50)
  o2.shapeColor= "yellow"
  o3 = createSprite(300,200,50,50)
  o3.shapeColor= "yellow"


  o1.velocityX = 2
  o3.velocityX = -2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(o2,movingRect)){
    movingRect.shapeColor = "red";
    o2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    o2.shapeColor = "green";
  }

  bounceoff(o1, o3)
  drawSprites();
}


function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
       return true;
}
else {
 return false;
}
}

function bounceoff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
      object1.velocityX = object1.velocityX*-1
      object2.velocityX = object2.velocityX*-1
}
else {
 return false;
}
}




