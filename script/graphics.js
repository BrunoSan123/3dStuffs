const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


camera.position.z = 13;

const radius = 7;
const widthSegments = 12;
const heightSegments = 8;
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const material = new THREE.PointsMaterial({
    sizeAttenuation: false,
    color: 'red',
    size: 3    // in world units
});
const points = new THREE.Points(geometry, material);
scene.add(points);

function animate() {
	requestAnimationFrame( animate );
        points.rotation.x += 0.001;
		points.rotation.y += 0.001;
        renderer.render( scene, camera );
			};

animate();