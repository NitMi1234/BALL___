
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,left,right,radius=40
var world,engine

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(800,670,width,20)
	left=new Ground(1100,600,20,120)
	right=new Ground(1250,600,20,120)

	Engine.run(engine);

	ellipseMode(RADIUS);

	var ballOptions={
	  restitution:0.8
	}
	ball=Bodies.circle(200,200,15,ballOptions)
	World.add(world,ball)


}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,15)
  ground.display();
  left.display();
  right.display();
  drawSprites();
 
}


function keyPressed(){
   if(keyCode===UP_ARROW)

   {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0.04})
   
	  }

}
