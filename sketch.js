var attempt=5;

function setup() {
  createCanvas(1280, 400);
  ground1=createSprite(800,height,1600,40);
  box1=createSprite(700,380,50,50);
  box1.shapeColor="yellow";
  box2=createSprite(740,380,50,50);
  box2.shapeColor="yellow";
  box3=createSprite(780,380,50,50);
  box3.shapeColor="yellow";
  box4=createSprite(820,380,50,50);
  box4.shapeColor="yellow";
  box5=createSprite(860,380,50,50);
  box5.shapeColor="yellow";
  box6=createSprite(720,350,40,40);
  box6.shapeColor="pink";
  box7=createSprite(750,350,40,40);
  box7.shapeColor="pink";
  box8=createSprite(780,350,40,40);
  box8.shapeColor="pink";
  box9=createSprite(810,350,40,40);
  box9.shapeColor="pink";
  box10=createSprite(840,350,40,40);
  box10.shapeColor="pink";
  box11=createSprite(740,330,30,30);
  box11.shapeColor="green";
  box12=createSprite(760,330,30,30);
  box12.shapeColor="green";
  box13=createSprite(780,330,30,30);
  box13.shapeColor="green";
  box14=createSprite(800,330,30,30);
  box14.shapeColor="green";
  box15=createSprite(820,330,30,30);
  box15.shapeColor="green";
  box16=createSprite(780,310,30,30);
  box16.shapeColor="blue";
  log1=createSprite(500,300,60,PI/2);
  log1.shapeColor="red";
  log2=createSprite(500,250,60,PI/2);
  log2.shapeColor="red";
  log3=createSprite(500,200,60,PI/2);
  log3.shapeColor="red";
  log4=createSprite(500,150,60,PI/2);
  log4.shapeColor="red";

  log1.velocityY=-2;
  log2.velocityY=2;
  log3.velocityY=-2;
  log4.velocityY=2;

  ball=createSprite(50,200,50,50);
 }
 
 function draw() {
   background("black");
  text("Attempt: "+attempt,50,50);
   drawSprites();
   edges=createEdgeSprites();
   log1.bounceOff(edges[2]);
   log1.bounceOff(ground1);
   log2.bounceOff(edges[2]);
   log2.bounceOff(ground1);
   log3.bounceOff(edges[2]);
   log3.bounceOff(ground1);
   log4.bounceOff(edges[2]);
   log4.bounceOff(ground1);


   if(keyDown(UP_ARROW)){
     ball.y=ball.y-3;
   }
   if(keyDown(DOWN_ARROW)){
     ball.y=ball.y+3;
   }
    if(keyDown(RIGHT_ARROW)){
      ball.x=ball.x+3;
    }
   if(keyDown(LEFT_ARROW)){
     ball.x=ball.x-3;
   }
   if(ball.isTouching(log1)||ball.isTouching(log2)||ball.isTouching(log3)||ball.isTouching(log4)){
     ball.x=50;
     ball.y=200;
     attempt=attempt-1;
   }
 }