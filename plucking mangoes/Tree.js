class Tree{
    constructor(x,y,width,height){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }

        this.tree = loadImage("sprites/tree.png");
        this.tree.scale = 0.5;

     }

    
    display(){

    push();
       
       imageMode(CENTER);
       strokeWeight(4);
       fill("brown");
       image(this.tree,1000,100,this.scale);
       pop()
       scale();

        
        

    }
}


