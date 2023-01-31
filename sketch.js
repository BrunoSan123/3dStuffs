
const c= 30
const G =6;
const dt=0.1;
let m87

let particles =[]




function setup() {
createCanvas(600, 600);
ellipseMode(RADIUS)
m87 = new BlackHole(100,320,3000); 
let start =height/2
let end =height/2-m87.rs*2.6

for(let y=end;y<start;y+=10){
    particles.push(new Photon(width-20,y))
}
}

function draw() {
background(255);
m87.show()

for(let p of particles){
    p.update();    
    p.show();
 }
}