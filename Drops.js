class Drops {
    constructor(x,y){
        var options = {
            'friction':0.1,
            'density': 1.0,
            'restitution': 0.1
        }
        this.rain = Bodies.circle(x,y,10,options)
        this.radius = 10
        World.add(world, this.rain);
    }
    updateDrop(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
        }
    }
    drawEllipse(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
    }
}