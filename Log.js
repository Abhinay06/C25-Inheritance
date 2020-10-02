class Log extends BaseClass {
    constructor(x, y, height, angle) {
      var options={
       'restitution':2.5


      }
      super(x,y,20,height,angle,options);
      this.image=loadImage("wood2.png");
      Matter.Body.setAngle(this.body, angle);
      
    }
   
  };
  
