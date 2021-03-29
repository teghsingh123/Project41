const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var lightning1, lightning2, lightning3, lightning4
var drops = [];
var umbrella
var rand;
var maxDrops = 100;
var lightning
function preload(){
    lightning1 = loadImage("thunderbolt/1.png")
    lightning2 = loadImage("thunderbolt/2.png")
    lightning3 = loadImage("thunderbolt/3.png")
    lightning4 = loadImage("thunderbolt/4.png")
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(800,800);

   umbrella = new Umbrella(100,650)
   if(frameCount % 60 ===0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400),random(0,400)));
        }
   }
    
}

function draw(){
    Engine.update(engine);
    background("black");
    rand = Math.round(random(1,4));
    if(frameCount % 100 ===0){
        lightning = createSprite(random(10,750), random(5,20),10,10)
        switch(rand){
            case 1: lightning.addImage(lightning1);
            break;
            case 2: lightning.addImage(lightning2);
            break;
            case 3: lightning.addImage(lightning3);
            break;
            case 4: lightning.addImage(lightning4);
            break;
            default: break;
        }
    }


    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].drawEllipse();
        drops[i].updateDrop()
        }
        drawSprites();
}   

