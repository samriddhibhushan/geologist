class Stone{
	constructor(x,y)
	{
	// assign options to the stone
	var options={
		'restitution':0.8,
		'friction':0.9,
		'density':12
	}
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 80;
    this.height = 95;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    fill("red")
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};