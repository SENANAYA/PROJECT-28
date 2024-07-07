
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone=[],ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

var stoneno=0
var launcher;

function preload(){
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;

	stone[0] = new Stone(250,height-170,30); 

	mango1 = new Mango(1100-220+width-1100,100+height-30-580,30);
  mango2 = new Mango(1170-220+width-1100,130+height-30-580,30);
	mango3 = new Mango(1010-220+width-1100,140+height-30-580,30);
	mango4 = new Mango(1000-220+width-1100,70+height-30-580,30);
	mango5 = new Mango(1100-220+width-1100,70+height-30-580,30);
	mango6 = new Mango(1000-220+width-1100,230+height-30-580,30);
	mango7 = new Mango(900-220+width-1100,230+height-30-580,40);
	mango8 = new Mango(1140-220+width-1100,150+height-30-580,40);
	mango9 = new Mango(1100-220+width-1100,230+height-30-580,40);
	mango10 = new Mango(1200-220+width-1100,200+height-30-580,40);
	mango11 = new Mango(1120-220+width-1100,50+height-30-580,40);
	mango12 = new Mango(900-220+width-1100,160+height-30-580,40);
console.log(width-300)
	tree = new Tree(width-300,height-30);
	ground = new Ground(width/2,height-20,width,20);

  launcher = new Launcher(stone[0].body,{x:235,y:height-170})

	Engine.run(engine);
}

function draw() {

  background(230);
  Engine.update(engine);
  textSize(25);
  text("Hit the mangoes with the stone!!",50 ,50);
  text("Press T to take another stone",50 ,100);
  image(boy ,200,height-250,200,300);
  

  tree.display();
  


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  for(i=0;i<=stoneno;i++){
  stone[i].display();
  }
  ground.display();
  launcher.display();
  
  if((keyCode===84)&&( stone[stoneno].set==="done")){

 keyCode=1
  stoneno=stoneno+1
  stone[stoneno]=new Stone(250,height-170,30); 
  launcher = new Launcher(stone[stoneno].body,{x:235,y:height-170})
  }
  keyCode=1
  for(i=0;i<=stoneno;i++){
  detectollision(stone[i],mango1);
  detectollision(stone[i],mango2);
  detectollision(stone[i],mango3);
  detectollision(stone[i],mango4);
  detectollision(stone[i],mango5);
  detectollision(stone[i],mango6);
  detectollision(stone[i],mango7);
  detectollision(stone[i],mango8);
  detectollision(stone[i],mango9);
  detectollision(stone[i],mango10);
  detectollision(stone[i],mango11);
  detectollision(stone[i],mango12);
  }
  
}

function mouseDragged()
{
 
  if(stone[stoneno].set==="undone"){
if(stone[stoneno].x<(mouseX+stone[stoneno].r)&&stone[stoneno].y<(mouseY+stone[stoneno].r)){
	Matter.Body.setPosition
     (stone[stoneno].body, {x:mouseX, y:mouseY}) 
     stone[stoneno].set="beingdone"
}
  }



}

function mouseReleased()
{
if(stone[stoneno].set==="beingdone"){
	launcher.fly();
  stone[stoneno].set="done"
  

}

}


function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }