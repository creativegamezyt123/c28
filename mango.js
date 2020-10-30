class mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution : 0,
            friction :1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image=loadImage("image/mango.png");
        this.body = Bodies.circle(this.x,this.y,this.t,options)
        World.add(world,this.body);
    }
    dispaly(){
        if(this.body.speed <3){
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
    
            translate(pos.x, pos.y);
    
            rotate(angle);
    
            
            rectMode(CENTER);
            rect(0,0,this.width, this.height);
            pop();
    
    
          }else{
            World.remove(world, this.body);
            push();
    
            this.visibility = this.visibility -5;
            pop();
    
        }

    }
}