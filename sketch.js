const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine;
var myworld;
var groundoptions;
var ball;
var balloptions;
var box1;

function setup() {
  createCanvas(400,400);
 myengine=Engine.create();
 myworld=myengine.world;

 
box1 = new Box(200,200,50,100);
box2 = new Box(200,50,50,50);
box3= new Box(200,100,20,20);
ground1=new ground(200,390,400,20);

}
function draw() {
  background(0);  
  Engine.update(myengine);

box1.display();
box2.display();
box3.display();
ground1.display();
  
}