const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground , ground_options,ball,ball_options;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
ground_options={
  isStatic : true
}
  ground = Bodies.rectangle(400,390,600,10,ground_options);
  World.add(world,ground);

  ball_options ={
    restitution:0.8
  }

  ball = Bodies.circle(200,200,10,ball_options);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER) ;
  rect(ground.position.x, ground.position.y, 600, 10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);

  drawSprites();
}