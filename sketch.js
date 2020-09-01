
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,stone, tree, boy, sling, side, side2;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(750, 690, 1500, 20);
	side = new Ground(5, 350, 10, 700);
	side2 = new Ground(1500-5, 350, 10, 700);
	stone = new Stone(750, 350, 15);
	boy = new Boy(0,0,0,0);
	sling = new Sling(stone.body, {x:902, y:572});

	mango1 = new Mango(250, 360,25);
	mango2 = new Mango(370, 410,25);
	mango3 = new Mango(210, 310,25);
	mango4 = new Mango(450, 344,25);
	mango5 = new Mango(321, 250,25);
	mango6 = new Mango(330, 335,25);
	mango7 = new Mango(181, 420,25);
	mango8 = new Mango(375, 295,25);
	mango9 = new Mango(285, 415,25);
	mango10 = new Mango(455, 415,25);
	

	tree = new Tree(0, 0, 0);

  var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); 
	Engine.run(engine); Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  ground1.display();
  side.display();
  side2.display();
  tree.display();
  boy.display();
  sling.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone.display();

  detectcollision(mango1, stone);
  detectcollision(mango2, stone);
  detectcollision(mango3, stone);
  detectcollision(mango4, stone);
  detectcollision(mango5, stone);
  detectcollision(mango6, stone);
  detectcollision(mango7, stone);
  detectcollision(mango8, stone);
  detectcollision(mango9, stone);
  detectcollision(mango10, stone);
  

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly();
}

function detectcollision(lMango, lStone){
  mangoBodyPosition = lMango.body.position;
  stoneBodyPosition = lStone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance<=lMango.radius+lStone.radius)
  {
    Matter.Body.setStatic(lMango.body, false);
  }

}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:750, y:30});
    sling.attach();
  }
}