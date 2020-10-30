
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

launcher1 = new launcher(10,320,10,10);
launcher1.visible = false;

	tree1 = new tree(650,10,70,100);
	boy1 = new boy(20,300,50,100);
	stone1= new stone(10,320,10,10);
	mango1=new  mango(660,15,10,10);
	mango2=new mango(670,19,10,10);
	mango3=new mango(680,15,10,10);
	mango4=new mango(675,20,10,10);
	mango5=new mango(680,17,10,10);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy1.display();
  stone1.display();

  if(this.body.speed <3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
  
          translate(pos.x, pos.y);
  
          rotate(angle);
  
          
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
  
  
        }else{
          World.remove(world, this.body);
          push();
  
          this.visibility = this.visibility -5;
          pop();
  
      }
  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
}


function mouseReleased(){
    fly();
}
function keyPressed(){
if(keyCode === 32){
    launcher1.attach(stone1.body);
}
}

