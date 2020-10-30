class boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("image/boy.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
    this.body(this.body.x,this.body.y,width,height);
    }
  }