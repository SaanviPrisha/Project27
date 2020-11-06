const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	bobObject1=new Bob(300,350,50);
	bobObject2=new Bob(350,350,50);
	bobObject3=new Bob(400,350,50);
	bobObject4=new Bob(450,350,50);
	bobObject5=new Bob(500,350,50);

	roof = new Roof(300,100,300,40);
	  
  	rope1= new Rope(bobObject1.body,{x: roof.body.position.x - 120, y: roof.body.position.y});
	rope2= new Rope(bobObject2.body, {x: roof.body.position.x - 80, y: roof.body.position.y});
	rope3= new Rope(bobObject3.body, {x: roof.body.position.x - 20, y: roof.body.position.y});
	rope4= new Rope(bobObject4.body, {x: roof.body.position.x + 20, y: roof.body.position.y});
	rope5= new Rope(bobObject5.body, {x: roof.body.position.x + 80, y: roof.body.position.y});
}
function draw() {
  background(255);

  rectMode(CENTER);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50}); } 
} 
