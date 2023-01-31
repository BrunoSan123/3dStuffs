class BlackHole{
    constructor(x,y,m){
        this.pos =createVector(x,y)
        this.mass = m
        this.rs = (2*G*this.mass/(c*c))
        console.log(this.rs)
    }

    show(){
        fill(0);
        noStroke()
        circle(this.pos.x,this.pos.y,this.rs);
        
        noFill()
        stroke(100,100)
        strokeWeight(64)
        circle(this.pos.x,this.pos.y,this.rs*3+32)

        stroke(255,150,0)
        strokeWeight(32)
        circle(this.pos.x,this.pos.y,this.rs*1.5+16)
    }
}