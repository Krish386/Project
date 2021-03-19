class Hero
  {
  
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, 50, options);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse( 0, 0, 50,50);
      pop();
    }
  }
  
  