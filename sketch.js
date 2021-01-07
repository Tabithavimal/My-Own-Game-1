const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var line;






function setup() {
  createCanvas(900,1500);
  
  engine = Engine.create();
	world = engine.world;
  

line1=new Line(width/2,1450,width,20)
line2=new Line(170,260,300,20)
line3=new Line(600,200,200,20)
line4=new Line(300,500,200,20)
line5=new Line(700,900,200,20)
line6= new Line(200,1000,200,20)
line7=new Line(400,1350,200,20)
line8=new Line(550,700,200,20)
door1=new Door(170,150,300,250)
shinchan1=new Shinchan(100,1400,90,100)





  Engine.run(engine);


}

function draw() {
  background("black");  
 
 
 
 line1.display();
 line2.display();
 line3.display();
 line4.display();
 line5.display();
 line6.display();
 line7.display();
 line8.display();
 door1.display();
shinchan1.display();






if(keyDown("space")){

shinchan.velocity


}






  drawSprites();
}