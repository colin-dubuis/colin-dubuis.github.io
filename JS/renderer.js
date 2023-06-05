

function createRenderer() {
  const renderer = new THREE.WebGLRenderer();

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;


  return renderer;
}