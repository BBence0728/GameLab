//game resources
    
  var backround = createSprite(200, 200);
      backround.setAnimation("grid_1");
    
  var snakeH = createSprite(200, 200);
      snakeH.setAnimation("codecool-logo-symbol.png_2");
snakeH.scale = 0.1;
    
  var food = createSprite(randomNumber(30, 370), randomNumber(30, 370));
      food.setAnimation("book_1");
      food.scale = 0.3;
    
  var counter = 0;
  var deathcounter = 0;
      createEdgeSprites();

//enemy
  

  var body = createSprite(randomNumber(30, 370), randomNumber(30, 370));
  var group = createGroup();
    
      body.setAnimation("kidportrait_09_1");
      body.scale = 0.1;
      body.velocityY=1.5;
      body.velocityX=1.5;
      body.setCollider("circle");
  
    
 


  

//moving




  var speed = 4 ;
//var speedS = randomNumber(-2, 2)
  function draw() {
    drawSprites();
    body.bounciness = 1;
    group.add(body);
    group.add(snakeH);
    body.bounceOff(bottomEdge); 
    body.bounceOff(topEdge);
    body.bounceOff(leftEdge);
    body.bounceOff(rightEdge);
    snakeH.bounceOff(bottomEdge); 
    snakeH.bounceOff(topEdge);
    snakeH.bounceOff(leftEdge);
    snakeH.bounceOff(rightEdge);

    fill("red");
    stroke("black");
    textSize(24);
    text("Points:"+ counter, 15, 30);
  
    fill("blue");
    stroke("black");
    textSize(24);
    text("Deaths:"+ deathcounter, 290, 30);
  
 
  
  if 
    (keyWentDown("up")){ 
  
    snakeH.setSpeedAndDirection(speed, -90);
  
 
  }
  else if
  
    (keyWentDown("down")){
  
    snakeH.setSpeedAndDirection(speed, 90);
  
 
  }
  else if
  
    (keyWentDown("left")){ 
  
    snakeH.setSpeedAndDirection(speed, 180);
  
  

  }
  else if 
  
 (keyWentDown("right")){
  
 snakeH.setSpeedAndDirection(speed, 0);
  
  

  } 
  
  //action
  
 
  
 
  if (snakeH.isTouching(food)){
  
 food.destroy();
  if (body.scale <= 0.3){
 (body.scale += 0.05);
 }
 food = createSprite(randomNumber(30, 370), randomNumber(30, 370));
  
 food.setAnimation("book_1");
  
 food.scale = 0.3;
  
 food.x = randomNumber(30, 370);
  
 food.y =randomNumber(30, 370);
  
 counter +=1;
  }
 
  
   
          
 if (snakeH.isTouching(group)) {
   snakeH.x = randomNumber(30, 370);
    snakeH.y =randomNumber(30, 370);
    snakeH.velocityY = 0;
    snakeH.velocityX = 0;
    body.scale = 0.1;
    counter = 0;
    body.destroy;
    body.x = randomNumber(30, 370);
    body.y =randomNumber(30, 370);
    body.velocityY=1;
    body.velocityX=1;
    deathcounter +=1;
    
 }
}
  
 