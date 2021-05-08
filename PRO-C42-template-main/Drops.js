class Drop {
    constructor(x,y) {
      var options = {
          density:1,
          frictionAir: 0.1,
          restitution : 1
      }
      this.rain = Bodies.circle(x,y,5,options);
      this.width = width;
      this.height = height;
      World.add(world, this.rain);
    }
    display(){
      var pos =this.rain.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0,0,5);
      pop();
    }
  };