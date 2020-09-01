class Mango{
    constructor(x, y, radius){

        var options = {
            isStatic:true,
            restitution:0,
            density:1.0,
            friction:1
        }
        this.radius = radius;

        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position

        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 50, 50);

    }
}