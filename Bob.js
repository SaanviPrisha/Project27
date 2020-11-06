class Bob{
    constructor(x, y) {
        var options = {
            isStatic: false,
            friction: 0.5,
            density: 1
        }

        this.body = Bodies.circle(x, y, 30, options);

        this.x = x;
        this.y = y;

        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS)
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipse(0,0, 20, 20);
        pop();
    }
}