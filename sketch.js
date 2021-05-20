
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;

function preload() {
  bg = loadImage("images/bg.jpg");
}

function setup() {
  canvas = createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(700,800,1400,60);
 ground3 = new Ground(590,570,300,20);
 ground2 = new Ground(900,270,300,20);

 bird = new Hexagon(200,400,30);
 slingshot = new SlingShot(bird.body,{x:200, y:400});

 box20=new Box(510,515,40,70);
 box21=new Box(550,515,40,70);
 box22=new Box(590,515,40,70);
 box23=new Box(640,515,40,70);
 box24=new Box(680,515,40,70);
 box25=new Box(540,460,40,70);
 box26=new Box(580,460,40,70);

 box27=new Box(620,460,40,70);
 box28=new Box(660,460,40,70);

 box30=new Box(595,400,40,70);

 box1=new Box(810,215,40,70);
 box2=new Box(850,215,40,70);
 box3=new Box(890,215,40,70);
 box4=new Box(940,215,40,70);
 box5=new Box(980,215,40,70);
 box6=new Box(840,160,40,70);
 box7=new Box(880,160,40,70);

 box8=new Box(920,160,40,70);
 box9=new Box(960,160,40,70);

 box10=new Box(895,100,40,70);
}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box30.display();

  slingshot.display();
  bird.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(bird.body, {x:200, y:400})
		slingshot.attach(bird.body);
	}
}
