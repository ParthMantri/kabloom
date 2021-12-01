// creating the variables
var user, bricks, bricksGroup;

// loading the images.
function preload() {
	gameOverImg = loadImage("gameOver.png");
	asteroidImg = loadImage("asteroid.jpg");
	spaceShip = loadImage("spaceship.jpg");
}

function setup() {

  // creating the canvas.
  createCanvas(1000,600);

  // creating the user.
  user = createSprite(width/2, 500, 40, 40);
  user.addImage(spaceShip);
  user.scale = 0.25

  // creating the gameStates.
  gameState = 0;

  // creating the scores
  score = 5;

  // creating the bricks
  bricksGroup = new Group();
}

function draw() {

  // making the background as green
  background(0);  

  // defining the gameState 0.
  if(gameState === 0){

  	// creating the neccessary text.
  	textSize(30);
  	textFont("Ayuthaya");
  	fill(123,12,89);
  	text("Welcome to the Game", 100, 100); 

  	textSize(30);
  	textFont("Ayuthaya");
  	fill(123,12,89);
  	text("If the asteroid touch you then you lose one of your five lives", 100, 200); 

  	textSize(30);
  	textFont("Ayuthaya");
  	fill(123,12,89);
  	text("Dodge from as many asteroids as you can", 100, 300); 

	textSize(30);
  	textFont("Ayuthaya");
  	fill(123,12,89);
  	text("Press space to start and control with your mouse", 100, 400); 
  }

  // gameState conversion.
  if(gameState === 0 && keyDown("space")){
    gameState = 1;
  }

  // defining the gamestate 1
  if(gameState === 1){

  	// chaging the position of the user.
  	user.x = 100;
  	user.y = mouseY;

  	// the score system
  	textSize(30);
  	textFont("Ayuthaya");
  	fill(123,12,89);
  	text("life remaining = " + score, 100, 100); 

  	// spwning the bricks.
  	if(frameCount % 20 === 0){
  		var bricks = createSprite(1010, random(0, 600), 20,20);
  		bricks.addImage(asteroidImg);
		bricks.scale = 0.5;
  		bricks.velocityX = -20 * 3 + score;
  		bricks.lifetime = 200;
  		bricksGroup.add(bricks);
  	}

  	// life reducing .
  	if(bricksGroup.isTouching(user)){
  		bricksGroup.destroyEach();
  		score = score - 1;
  	}

  	// gameover state
  	if(score === 0){
  		user.destroy();
		var gameOver = createSprite(width/2, height/2, 10, 10);
  		gameOver.addImage(gameOverImg);
  		gameOver.scale = 3;
  	}
  }


  // drawing the sprites
  drawSprites();
}