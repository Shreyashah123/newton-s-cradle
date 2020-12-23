
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,200,600,20);
	bob1=new Bob(200,550,40,40);
	rope1=new Rope(bob1.body,roof.body,-190,0);
	bob2=new Bob(280,550,40,40);
	rope2=new Rope(bob2.body,roof.body,-110,0);
	bob3=new Bob(360,550,40,40);
	rope3=new Rope(bob3.body,roof.body,-30,0);
	bob4=new Bob(440,550,40,40);
	rope4=new Rope(bob4.body,roof.body,50,0);
	bob5=new Bob(520,550,40,40);
	rope5=new Rope(bob5.body,roof.body,130,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
 rope5.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-90,y:-85})
	}
}


