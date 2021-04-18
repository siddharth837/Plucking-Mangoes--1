class Man{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.width=150;
        this.height=150;
        this.man=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        this.image=loadImage("boy.png");
        World.add(world,this.man)
    }
    display(){
        var posMan=this.man.position;
        push()
        translate(posMan.x,posMan.y);
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}