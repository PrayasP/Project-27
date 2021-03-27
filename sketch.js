
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new bob(400-35-35,350,35);
	bob2 = new bob(400-35,350,35);
	bob3 = new bob(400,350,35);
	bob4 = new bob(400+35,350,35);
	bob5 = new bob(400+35+35,350,35);
	roofObject = new Roof(400,200,200,30);

  rope1 = new Chain(bob1.body,roofObject.body,-70,0);
	rope2 = new Chain(bob2.body,roofObject.body,-35,0);
	rope3 = new Chain(bob3.body,roofObject.body,0,0);
	rope4 = new Chain(bob4.body,roofObject.body,35,0);
	rope5 = new Chain(bob5.body,roofObject.body,70,0);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyDown(UP_ARROW)){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:0});
  }
  
  drawSprites();
 
}



