var snake,snakeAnimation;
var bush1,bush2,bush3,bushImage1;
var bush4,bushImage2;
var bush5,bushImage3;
var bush6,bush7,bushImage4,bushImage5;
var edges;
var appleImage;

function preload(){
  /*snakeAnimation = loadAnimation("sprites/tile000.png","sprites/tile001.png","sprites/tile002.png","sprites/tile003.png","sprites/tile004.png","sprites/tile005.png","sprites/tile006.png","sprites/tile007.png","sprites/tile008.png",
  "sprites/tile009.png","sprites/tile010.png","sprites/tile011.png","sprites/tile012.png","sprites/tile013.png","sprites/tile014.png","sprites/tile015.png","sprites/tile016.png","sprites/tile017.png","sprites/tile018.png","sprites/tile019.png",
  "sprites/tile020.png","sprites/tile021.png","sprites/tile022.png","sprites/tile023.png","sprites/tile024.png","sprites/tile025.png","sprites/tile026.png","sprites/tile027.png","sprites/tile028.png","sprites/tile029.png","sprites/tile030.png",
  "sprites/tile031.png");
  */
  bushImage1 = loadImage("sprites/bush1.png");
  bushImage2 = loadImage("sprites/bush2.png.png");
  bushImage3 = loadImage("sprites/bush3....png");
  bushImage4 = loadImage("sprites/bush4.png");
  bushImage5 = loadImage("sprites/bush5.png");
  snakeAnimation = loadImage("sprites/download.png");
  appleImage = loadImage("sprites/apple.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  edges = createEdgeSprites();
  
  snake = createSprite(width/2,height/2);
  snake.addAnimation("movingSnake",snakeAnimation);
  snake.scale = 0.4;

  bush1 = createSprite(400,50);
  bush1.addImage(bushImage2);
  bush1.scale = 0.5;

  bush2 = createSprite(1490,190);
  bush2.addImage(bushImage2);
  bush2.scale = 0.5;
  bush2.rotation = 90;

  bush3 = createSprite(1270,50);
  bush3.addImage(bushImage2);
  bush3.scale = 0.5;

  bush4 = createSprite(900,50);
  bush4.addImage(bushImage2);
  bush4.scale = 0.5;

  bush5 = createSprite(700,50);
  bush5.addImage(bushImage2);
  bush5.scale = 0.5;
  
  bush6 = createSprite(500,50);
  bush6.addImage(bushImage4);
  bush6.scale = 0.5;
  
  bush7 = createSprite(800,50);
  bush7.addImage(bushImage5);
  bush7.scale = 0.5;
  
}

function draw() {
  background(29,79,24);  

  snake.bounceOff(edges);

  snake.velocityX = 0;
  snake.velocityY = 0;

  if (keyDown("right")) {
    snake.velocityX = 2;
    snake.velocityY = 0;
    snake.rotation = 180;
  }
  if (keyDown("left")) {
    snake.velocityX = -2;
    snake.velocityY = 0;
    snake.rotation = 0;
    
  }
  if (keyDown("up")) {
    snake.velocityX = 0;
    snake.velocityY = -2;
    snake.rotation = 90;
  }
  if (keyDown("down")) {
    snake.velocityX = 0;
    snake.velocityY = 2;
    snake.rotation = 270;
  }

  spawnApples();

  drawSprites();
}

function spawnApples(){
  var apple = createSprite(width/2,height/2);
  apple.addImage(appleImage);
  apple.scale = 0.08;
}