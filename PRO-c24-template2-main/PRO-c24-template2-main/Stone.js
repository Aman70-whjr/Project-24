class Stone {
    constructor(x, y ) {
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':12}
          this.r=20
           this.body=Bodies.circle(x,y,this.r,options)

           

           World.add(world , this.body)
      }
           display(){
          var pos= this.body.position
          var angle=this.body.angle
          push()
          translate (pos.x,pos.y)
          rotate(angle)
          ellipseMode(RADIUS)
          fill("blue")
        ellipse(0,0,this.r,this.r)
           }

        
        
    }