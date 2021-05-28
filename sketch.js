const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box3 , box2 , box4;

var log1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(550,470,70,70);
    box2 = new Box(750,470,70,70);
    pig1 = new Pig(600,470);
    log1 = new Log(640,400,300,PI/2);
    

    box3 = new Box(550,350,70,70);
    box4 = new Box(750,350,70,70);
    pig2 = new Pig(600,350);
    log2 = new Log(640,300,300,PI/2);

    box5 = new Box(650,250,70,70);

    log3 = new Log(600,200,150,PI/7);
    log4 = new Log(700,200,150, -PI/7);
    bird1 = new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}