const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
 
var division=[];
var particles=[];
var plinkos=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
//  createSprite(400, 200, 50, 50);
ground= new Ground(300,790,600,20)
particle=new Particle(200,100,10);
for(var k=0; k<=innerWidth;k=k+80){
  division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}
  for(var j=40; j<=width; j=j+50){
plinkos.push(new Plinko(j,75));
  }
  for (var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=40; j<=width; j=j+100){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width; j=j+150){
    plinkos.push(new Plinko(j,175));
      }

  Engine.run(engine);


}

function draw() {
  Engine.update(engine);
  background(0,0,0); 
  ground.display(); 
  for(var j=0;j< particles.length;j++){
    particles[j].display();
  }
  for (var k=0;k<division.length;k++){
    division[k].display();
  }
  for (var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

if(frameCount%60===0){
  particles.push(new Particle (random(width/2-10,width/2+10),10,10));
}


  drawSprites();
}