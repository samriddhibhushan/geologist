const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var stone;
var iron1;
var small1,small2,small3,small4,small5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(900,150,60);
    stone = new Stone(550,150);
    iron1 = new Iron(260,150,90,95);
    small1 = new Small(700,150,10);
    small2 = new Small(730,150,10);
    small3 = new Small(760,150,10);
    small4 = new Small(790,150,10);
    small5 = new Small(820,150,10);
  

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    stone.display();
    iron1.display();
    small1.display();
    small2.display();
    small3.display();
    small4.display();
    small5.display();
    
 
}