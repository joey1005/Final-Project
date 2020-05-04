

let camera, scene, renderer, controls;

const container= document.getElementById('container');

function init() {
  scene = new THREE.Scene();
  let width = 1500;
  let height = 800;

  //cubemap background
  scene.background = new THREE.CubeTextureLoader()
    .setPath('images/cubemap/')
    .load( [
      'px.png',
      'nx.png',
      'py.png',
      'ny.png',
      'pz.png',
      'nz.png'
    ]);

    scene.background.minFilter = THREE.LinearFilter;


  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.z = 700; 
  camera.position.y = 200;
  scene.add(camera);

  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);


  

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);


  controls = new THREE.OrbitControls(camera, renderer.domElement);
  container.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera); 

  controls.update();
}

init();
animate();

