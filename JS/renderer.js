


function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;


  return renderer;
}