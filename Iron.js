class Iron {
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':5,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ("black");
      strokeWeight(5);
      fill("magenta");
      
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  