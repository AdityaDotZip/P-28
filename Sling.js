class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 50
        }
        this.sling = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var A = this.sling.bodyA.position;
        var B = this.pointB;
        strokeWeight(4);
        line(A.x, A.y, B.x, B.y);
        }
    }

    fly(){
        this.sling.bodyA = null;
    }
    
    attach(){
        this.sling.bodyA = stone.body;   
    }
}