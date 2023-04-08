class Ship{
    constructor(){

        this.width=100;
        this.height=100;
        this.rotation=0;

        this.position = {
            x:180,
            y:180,
        }
        this.sides = {
            top:this.position.y,
            bottom:this.position.y+this.height,
            left:this.position.x,
            right:this.position.x+this.width,
        }
}

    draw(){
        c.save()
        c.translate(this.position.x+rotation+hVelocity,this.position.y-Math.abs(hVelocity)*0.4+100)
        c.rotate(rotation/10);//0 = 6.2
        c.drawImage(shipSprite,-50,-50,this.width,this.height);
        c.restore()
    }

}