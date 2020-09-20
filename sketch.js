var car, wall;
var speed, weight;
var gameState;
var simRunning = 1;
var simStop = 2;
function setup() {
  World.frameRate = 300;

  createCanvas(1536,200);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(70, 100, 30, 30);
  car.velocityX = speed;
  wall = createSprite(1500, 100, 60, 150);

  gameState = simRunning;
  }

function draw() {
  background("lightgray");  
  if((car.x - wall.x < car.width/2 + wall.width/2) && (wall.x - car.x < wall.width/2 + car.width/2) && (car.y - wall.y < car.height/2 + wall.height/2) && (wall.y - car.y < wall.height/2 + car.height/2)){
  car.velocityX = 0;
  var deform = (0.5 * weight * speed * speed) / 22500;
		if(deform < 100){
			car.shapeColor = "green";
			textSize(30);
			fill("green");
			text("Car is Green, Press R to Rerun Simulation", 550, 100);
		}
		if((deform > 100) && (deform < 180)){
			car.shapeColor = "yellow";	
			textSize(30);
			fill("yellow");
			text("Car is Yellow, Press R to Rerun Simulation", 550, 100);
		}
		if(deform > 180){
			car.shapeColor = "red";
			textSize(30);
			fill("red");
			text("Car is Red, Press R to Rerun Simulation", 550, 100);
		}
	 if(keyDown("r")){
	car.x = 70;
	speed = random(55,90);
	weight = random(400,1500);
	car.velocityX = speed;
	gameState = simRunning;
	car.shapeColor = "gray";
		}
  }
  
 
  drawSprites();
  }