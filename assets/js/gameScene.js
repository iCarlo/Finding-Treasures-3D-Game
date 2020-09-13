let createGameScene = (canvas, engine) => {
    // Create scene
    const scene = new BABYLON.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
    scene.collisionsEnabled = true;

    // create Light
    const light = new BABYLON.PointLight('pointLight', new BABYLON.Vector3(0, 20, 0), scene);
    light.intensity = 0.7


    // Create Camera and Settings
    const camera = new BABYLON.UniversalCamera("MyCamera", new BABYLON.Vector3(0, 3, 0), scene);
    camera.keysUp.push(87);
    camera.keysDown.push(83);
    camera.keysLeft.push(65);
    camera.keysRight.push(68);

    camera.speed = 0.4;
    camera.fov = 0.8;
    camera.checkCollisions = true;
    // camera.applyGravity = true;

    camera.ellipsoid = new BABYLON.Vector3(1.5, 1.5, 1.5);
    camera.ellipsoidOffset = new BABYLON.Vector3(0, 1, 0);

    camera.angularSpeed = 0.01;
    camera.angle = Math.PI / 2;
    camera.direction = new BABYLON.Vector3(Math.cos(camera.angle), 0, Math.sin(camera.angle));
    camera.setTarget(new BABYLON.Vector3(0, 3, 1));
    camera.attachControl(canvas, true);


    // Create Ground
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 65 }, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    ground.material.diffuseColor = new BABYLON.Color3(0.70, 0.35, 0.00);
    ground.material.backFaceCulling = false;




    return scene;
}

export {
    createGameScene
};