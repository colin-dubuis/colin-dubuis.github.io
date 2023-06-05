class World{
    constructor(container){
        
        this.scene = createScene();
        this.renderer = createRenderer();
        this.camera = createCamera();
        this.cube = createCube();
        container.append(this.renderer.domElement)
        const cube = createCube();
        const light = createLights();

        this.scene.add(cube, light);

        const resizer = new Resizer(container, this.camera, this.renderer);


    }
    render(){
        this.renderer.render(this.scene, this.camera);

    }
}