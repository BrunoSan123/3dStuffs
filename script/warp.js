let scene,camera,renderer,space;
let height = window.innerHeight;
let width = window.innerWidth;

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 60, width / height, 1, 1000 );
    
    camera.position.z=10;
    camera.position.y=20;
    camera.rotation.x =Math.PI/2

    let starGeo =new THREE.BufferGeometry();
    let vertice =[]

    for(let i=0; i<6000;i++){
        let star = new THREE.Vector3(
            Math.random() *600 - 300,
            Math.random() *600 - 300,
            Math.random() *600 - 300
            );

            vertice.push(star)
        
        }

    const bufferArray=new Float32Array(vertice)
    starGeo.setAttribute('position',new THREE.BufferAttribute( bufferArray,3))

    var starMat =new THREE.PointsMaterial({
        color:'rgb(255,255,255)',
        size:0.7,  
    })

    space = new THREE.Points(starGeo,starMat)
    scene.add(space)
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width,height);
    renderer.render(scene,camera)
    document.body.appendChild( renderer.domElement );
}

init()