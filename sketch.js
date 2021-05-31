const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup()
{
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(380,200,200,10);

  box1 = new Box(390,170,50,50);

  box2 = new Box(300,170,50,50)

  box3 = new Box(100,100,50,50)

  rope = new SlingShot(box3.body ,{x : 70 ,y:120 })
  
}

function draw() 
{
  Engine.update(engine);
  background("pink");  

  ground1.display();

  fill("yellow");
  box1.display();

  fill("green");
  box2.display();

  box3.display()
  rope.display();



  textSize(30);
  text("x : "+mouseX+"y : "+mouseY,mouseX,mouseY);

  drawSprites();
}

function mouseDragged()
{
  Matter.Body.setPosition(box3.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
  rope.fly();
}