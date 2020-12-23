class Bob{
    constructor(x,y,r){
        var options ={
            density:0.5,
            friction:0,
            isStatic:false,
            restitution:1.1,
        }
       this.x=x;
       this.y=y;

        this.body= Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.r=40;
        
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
