const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const vertices = [];


for ( let i = 0; i < 10000; i ++ ) {

	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );
    vertices.push( x, y, z);
    

}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

const material = new THREE.PointsMaterial( { color: 'rgb(255,255,255)' } );
const points = new THREE.Points( geometry, material );



function test(){
scene.add( points );
renderer.setSize(window.innerWidth,window.innerHeight);
//renderer.render(scene,camera)
document.body.appendChild( renderer.domElement );
}

 function animate(){
    requestAnimationFrame( animate );
    points.rotation.x += 0.001;
    points.rotation.y += 0.001;
    renderer.render( scene, camera );
       
} 

test()
animate()