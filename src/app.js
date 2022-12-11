import {
    Scene,                  // scene
    PerspectiveCamera,      // camera
    WebGLRenderer,          // renderer
    ACESFilmicToneMapping,  // renderer
    sRGBEncoding,           // renderer
    PCFSoftShadowMap,       // renderer
} from "https://cdn.skypack.dev/three@0.137";
import { OrbitControls } from "https://cdn.skypack.dev/three-stdlib@2.8.5/controls/OrbitControls";

export default class App {
    constructor()
    {
        // TODO::
    }

    init = async () => {
        this.initScene();
        this.initRenderer();
        this.initCamera();
        this.initControls();
    }

    initScene = () => {
        this.scene = new Scene();
        this.ringsScene = new Scene();
    }
    
    initRenderer = () => {
        this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(innerWidth, innerHeight);
        this.renderer.toneMapping = ACESFilmicToneMapping;
        this.renderer.outputEncoding = sRGBEncoding;
        this.renderer.physicallyCorrectLights = true;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = PCFSoftShadowMap;
    }
    
    initCamera = () => {
        // PerspectiveCamera(a,b,c,d)
        // a : field of view (FOV)
        //     e.g. if FOV increases, the objects become smaller 
        // b : aspect ratio
        // c : view frustum
        //     e.g. 
    
        // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
        // fov — Camera frustum vertical field of view, angle between the top and botom planes of the view pyramid.
        //      e.g. if FOV increases, the objects become smaller 
        // aspect — Camera frustum aspect ratio.
        // near — Camera frustum near plane.
        // far — Camera frustum far plane.
        this.ratio = innerWidth / innerHeight;

        this.camera = new PerspectiveCamera(45, this.ratio, 0.1, 1000);
        this.camera.position.set(0, 15, 50);
    
        this.ringsCamera = new PerspectiveCamera(45, this.ratio, 0.1, 1000);
        this.ringsCamera.position.set(0, 0, 50);
    }

    initControls = () => {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.dampingFactor = 0.05;
        this.controls.enableDamping = true;
    }
}

export {App}