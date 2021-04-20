class Paper
{
	constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.2
        }
    }
        this.width=50
        this.height=50
		this.body=Bodies.rectangle(x,y,50,50,options)
		this.image=loadImage("paper.png")
		World.add(world, ssthis.Body)
	
	display()
    var posX=this.Body.position.x;
    var posY=this.Body.position.y;

    push()
    translate(posX, posY);
    rectMode(CENTER)
    
    
    pop()
	
			
			
	

