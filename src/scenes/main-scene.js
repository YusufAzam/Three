
import * as THREE from "three";

class MainScene {
    renderer; geometry; material; cube;
    
    constructor() {
        this.renderer = new THREE.WebGLRenderer();
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
    }
    
     animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };


    setUp() {
        console.log("Loading setUp");
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene.add(this.cube) ;
        this.camera.position.z = 5;

        this.checkWebgl();
    };

    checkWebgl() {
        console.log("Loading check for webgl");
        if (WEBGL.isWebGLAvailable()) {
            animate();
        
        } else {
            const warning = WEBGL.getWebGLErrorMessage();
            document.getElementById( 'container' ).appendChild( warning );
        }
    }

}


