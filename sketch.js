const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,600,1200,20);

    hero=new Hero(200,250)

    rope=new Rope(hero.body,{x:300,y:100})


    box1=new Box(500,550,70,70)
box2=new Box(500,450,70,70)
box3=new Box(500,350,70,70)
box4=new Box(500,250,70,70)
box5=new Box(500,150,70,70)
box6=new Box(500,50,70,70)


box11=new Box(400,550,70,70)
box22=new Box(400,450,70,70)
box33=new Box(400,350,70,70)
box44=new Box(400,250,70,70)
box55=new Box(400,150,70,70)
box66=new Box(400,50,70,70)

box111=new Box(600,550,70,70)
box222=new Box(600,450,70,70)
box333=new Box(600,350,70,70)
box444=new Box(600,250,70,70)
box555=new Box(600,150,70,70)
box666=new Box(600,50,70,70)




 


}

function draw(){
    
    background("white")
    Engine.update(engine);
    ground.display();


    box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

box11.display();
box22.display();
box33.display();
box44.display();
box55.display();
box66.display();

box111.display();
box222.display();
box333.display();
box444.display();
box555.display();
box666.display();



    hero.display();

    rope.display();


     
}

function mouseDragged(){
  
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
   rope.fly();
  //  gameState = "launched";
}

function keyPressed(){
   // if(keyCode === 32){
    
  //   bird.trajectory=[];
  //   Matter.Body.setPosition(bird.body,{x:200,y:15})
 //    slingshot.attach(bird.body);
   // }
}

  













