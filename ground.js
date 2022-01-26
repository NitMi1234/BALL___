class Ground 
{
  //properties, part that goes into setup
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    //created properties for width and height as friction engine doesnt recognize them
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  //functions, part that goes into draw
  display() {
    //name spacing
    var pos = this.body.position;
    //push and pop stop the changes to leaking out to other objects/classes
    push();
    //x and y position as center of the rectangle rather then top left
    rectMode(CENTER);
    //outline
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


