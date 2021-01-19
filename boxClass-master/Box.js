class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    // captures new settings 
    // we use push and pop so that changes do not apply to all the object 
    // to all the objects in the game
    push();
    // translate remaps the position of the box on the canvas and 
    //hence we put 0,0 while displaying it
 
    translate(pos.x,pos.y);
    // rotate the body with an angle
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    // pop reverts back to old settings
    pop();
  }
};
