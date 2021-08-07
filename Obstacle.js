class Obstacle {
    constructor(x , y , width, height){
        var options = {
            'restitution' : 0.4,
            'density' : 100
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
        this.body.Lifetime = 100
        
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        rect(0, 0 , this.width, this.height)
        //rect(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}