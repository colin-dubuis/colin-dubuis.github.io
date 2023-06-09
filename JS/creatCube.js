

function createCube() {
  // create a geometry
  const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

  // Switch the old "basic" material to
// a physically correct "standard" material
const material = new THREE.MeshBasicMaterial({ color: "purple" });

  // create a Mesh containing the geometry and material
  const cube = new THREE.Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  return  cube;
}