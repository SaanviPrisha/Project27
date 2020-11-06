class Rope {
    constructor(body1,point2) {
        var options = {
            bodyA: body1,
            pointB: point2
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;

        strokeWeight(3);
        stroke("black")

        line(pointA.x, pointA.y,pointB.x, pointB.y);
    }

}