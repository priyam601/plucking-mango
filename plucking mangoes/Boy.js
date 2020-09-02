class Boy{
    constructor(x,y,width,height){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }

        this.boy = loadImage("sprites/boy.png");
       

     }

    
    display(){

    push();
       
       imageMode(CENTER);
       strokeWeight(4);
       fill("brown");
       image(this.boy,400,100,this.scale);
       pop()
       scale();

        
        

    }
}


