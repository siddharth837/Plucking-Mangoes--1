
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var stone;
var slingShot;
var engine,world;

function setup() {
	createCanvas(1200, 700);

    engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
	b1=new Man();
	b2=new Tree();
	b3=new Mango(695,401,55,55);
	b4=new Mango(795,201,55,55);
	b5=new Mango(695,302,55,55);
	b6=new Mango(520,263,55,55);
	b7=new Mango(1067,369,55,55);
	b8=new Mango(967,269,55,55);
	b9=new Mango(1099,249,55,55);
	stone=new Stone(168,487,50,50);

    slingShot = new SlingShot(stone.stone,{x:200, y:100});
		
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.run(engine);
  fill("black");
  textSize(30);
  text(mouseX+","+mouseY,mouseX,mouseY);

 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 stone.display();
 slingShot.display();

}



