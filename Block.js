class Block{
  constructor(x, y, width, height) {
      var options = {
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png")
      this.Visibility =255
      World.add(world, this.body);

    }
    display(){
      var pos= this.body.position;
      //rectMode(CENTER);
     // rect(pos.x,pos.y,this.width, this.height);
      if(this.body.speed < 3){
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
         pop();
       }
      }
    }
