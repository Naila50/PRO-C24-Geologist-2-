class Hammer {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':1,
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(5);
      stroke('black')
      fill('orange')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  