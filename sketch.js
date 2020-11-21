
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pandulem= new Pandulem(200,150,30,30)
	pandlulem2= new Pandulem(180,150,30,30)
pandlulem3= new Pandulem(220,150,30,30)
bob= new Bob(200,350,400,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



