class Boy{
    constructor(x, y ,width, height){
        var options={
            isStatic:true
        }

        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/boy.png");
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,950, 630, 150, 250);
    }
}