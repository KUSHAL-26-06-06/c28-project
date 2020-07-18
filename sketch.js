var paperObject;
var ground;
var box1,box2,box3;
var binImage,captureImage;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	binImage=loadImage("bin.png");
	captureImage=loadImage("capture.png");
}

function setup() {
	createCanvas(800, 700);
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

    box1=createSprite(670,600,200,20);
	box2=createSprite(560,570,20,100);
	box3=createSprite(780,570,20,100);
	box4= createSprite(1000,550,200,190);
    slingshot = createSprite(100,200,50,50);

	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 paperObject=Bodies.circle(100,600,20,options);
	 paperObject.addImage(captureImage);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
   box1.shapeColor="white";
   box2.shapeColor="white";
   box3.shapeColor="white";
  
 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	   
	 }
	 
}
function mouseDragged(){
	Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingshot.fly();
	
}