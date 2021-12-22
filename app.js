// ThreeJS scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 50;

// Web GL render
const renderer = new THREE.WebGLRenderer({
  alpha: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Light
const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 10, 100, 10 );
spotLight.castShadow = true;

// Orbit controls
const controls = new THREE.OrbitControls(camera);
controls.Zoom = true;
controls.Pan = true;
controls.Rotate =true;
scene.add( spotLight );

// 3D Object
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 )
const material = new THREE.MeshStandardMaterial( { 
  color: 0x00ff00,
  emissive : 0x0da4f3,
} );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

// Animate function
const animate = function () {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    controls.update();
    renderer.render( scene, camera );
};

animate();
