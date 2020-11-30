class Plinko{
    constructor(x,y){
        var options={
            isStatic:2
        }
        this.r=10
this.body=Bodies.circle(x,y,10,options)


World.add(world,this.body)
    }
display(){
    var pos = this.body.position;
    
   

fill("white");
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.r,this.r)

}



}