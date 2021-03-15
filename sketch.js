var picture,laserWall,laserWal2,Getaway,thief,Diamond,backGround,getaway,drone,dDrone,Diamond2
 function preload(){
  backGround = loadImage("images/background.png")
  getaway = loadImage("images/getaway.png")
  Diamond = loadImage("images/d2.png")
  Diamond2 = loadImage("images/d1.png")
  drone = loadAnimation("images/Drone.png","images/Drone1.png")
  dDrone = loadImage("images/laserDrone.png")
}
 function setup(){
    picture=createSprite(200,200);
     picture.addImage(backGround);
      laserWall=createSprite(200,20,20,20);
      laserWal2=createSprite(20,200,20,20);
      Getaway=createSprite(395,10,10,10);
     Getaway.addImage(getaway);
      thief=createSprite(390,10,10,10);
     thief.addAnimation("Drone",drone);
      diamond=createSprite(10,390,5,5);
     diamond.addImage("Diamond",Diamond);
}
 function draw(){
   createEdgeSprites()
   laserWall.shapeColor="red";
   laserWal2.shapeColor="red";
   
   if (diamond.isTouching(getaway)){
    text("Thief Wins!!!",155,200);
  text("press R to restart",140,250);
  thief.velocityX=0;
  thief.velocityY=0;
  laserWall.velocityY=0;
  laserWall.velocityX=0;
  laserWal2.velocityY=0;
  laserWal2.velocityX=0;
  thief.changeImage("drone",drone);
   }
   if (keyDown(UP_ARROW)){
    thief.velocityY=-5;
    thief.velocityX=0;
     }
    if (keyDown(DOWN_ARROW)){
    thief.velocityY=5;
    thief.velocityX=0;
    }
    if (keyDown(RIGHT_ARROW)){
    thief.velocityX=5;
    thief.velocityY=0;
    }
    if (keyDown(LEFT_ARROW)){
    thief.velocityX=-5;
    thief.velocityY=0;
    }
   if (keyDown("U")){
    laserWal2.velocityY=-4;
     laserWal2.velocityX=0;
   }
     if(keyDown("j")){
     laserWal2.velocityY=4;
     laserWal2.velocityX=0;
   }
     if(keyDown("h")){
     laserWal2.velocityY=0;
     laserWal2.velocityX=-4;
   }
     if(keyDown("k")){
     laserWal2.velocityY=0;
     laserWal2.velocityX=4;
   }
    if (keyDown("w")){
    laserWall.velocityY=-4;
    laserWall.velocityX=0;
    }
    if (keyDown("s")){
    laserWall.velocityY=4;
    laserWall.velocityX=0;
    }
    if (keyDown("a")){
    laserWall.velocityX=-4;
    laserWall.velocityY=0;
    }
  if (keyDown("d")){
  laserWall.velocityX=4;
  laserWall.velocityY=0;
  }
    laserWall.bounceOff(topEdge);laserWall.bounceOff(bottomEdge);
     laserWall.bounceOff(leftEdge);laserWall.bounceOff(rightEdge);
     laserWal2.bounceOff(topEdge);laserWal2.bounceOff(bottomEdge);
     laserWal2.bounceOff(leftEdge);laserWal2.bounceOff(rightEdge);
     thief.bounceOff(topEdge);thief.bounceOff(bottomEdge);
     thief.bounceOff(leftEdge);thief.bounceOff(rightEdge);
     laserWall.bounceOff(laserWal2);
     laserWal2.bounceOff(laserWall);

   if (thief.isTouching(laserWall)){
   text("Security Wins!!!",155,200);
   text("press R to restart",140,250);
   diamond.changeImage("Diamond", Diamond);
   thief.velocityX=0;
   thief.velocityY=0;
   laserWall.velocityY=0;
   laserWall.velocityX=0;
   laserWal2.velocityY=0;
   laserWal2.velocityX=0;
   thief.changeImage("drone",drone);
   }
   if (thief.isTouching(laserWal2)){
    text("Security Wins!!!",155,200);
   text("press R to restart",140,250);
   diamond.changImage("Diamond",diamond);
   thief.velocityX=0;
   thief.velocityY=0;
   laserWall.velocityY=0;
   laserWall.velocityX=0;
   laserWal2.velocityY=0;
   laserWal2.velocityX=0;
   thief.changeImage("drone",drone);
   }
   if (thief.isTouching(diamond)){
   thief.changeImage("dDrone",dDrone);
   diamond.changeImage("Diamond2",diamond2);
   diamond.x=thief.x;
   diamond.y=thief.y;
   }
    
   if (keyDown("R")){
     thief.changeImage("drone",drone);
      laserWal2.velocityY=0;
      laserWal2.velocityX=0;
      laserwal2.y=20;
      laserWal2.x=200;
      laserWall.velocityY=0;
      laserWall.velocityX=0;
      laserWall.y=380;
      laserWall.x=20;
      thief.x=390;
      thief.y=10;
      thief.velocityX=0;
      thief.velocityY=0;
      diamond.x=10;
      diamond.y=390;
      diamond.changeImage("Diamond",Diamond);
  }
   drawSprites();
}