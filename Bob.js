class bob{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            friction: 0.4,
            density: 3,
            restitution: 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("pink");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}