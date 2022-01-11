const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1;
var pig1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   //ground flour of the game
    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    pig1 = new Pig (800,320,20,20)
    log1 = new Log(810,260,300,20);
   // 2nd flour of the game 
   box3 = new Box(700,240,50,50);
   box4 = new Box(920,240,50,50);
   pig2 = new Pig (800,240,20,20)
   log2 = new Log(810,120,300,20);

   box5 = new Box(800,100,50,50);
   bird = new Bird(100,200,50,50);
    ground = new Ground(200,height-20,2000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
   
    // ground flour of the game
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    // 2nd flour of the game 
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    bird.display();
    ground.display();
}