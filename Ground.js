class Ground{

    constructor(x,y,width,height){

       var option = {

        isStatic:true

        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;


       this.body= Bodies.rectangle(x,y,width,height,option);
       World.add(world,this.body);


    }

    display(){

        rectMode(CENTER);
        var pos  = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
        fill("white");
    }

}