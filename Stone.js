class Stone{
    constructor(x, y, radius){
        var options ={
            isStatic:false
        }

        this.radius = radius
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position

        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 30, 30);

    }
}