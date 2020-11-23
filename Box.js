class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(World, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    rect(0, 0, this.width, this.height);

  }
};
