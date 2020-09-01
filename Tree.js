class Tree{
    constructor(x, y ,width){
        var options={
            isStatic:true
        }

        this.width = width;
        this.image = loadImage("sprites/tree.png");
        this.body = Matter.Bodies.rectangle(x, y, width, 500, options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, 300 ,450, 400, 500);
    }
}