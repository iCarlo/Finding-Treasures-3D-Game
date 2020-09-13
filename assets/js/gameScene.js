let createGameScene = (canvas, engine) => {
    // Create scene
    let scene = new BABYLON.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -.4, 0);
    scene.enablePhysics(scene.gravity, new BABYLON.CannonJSPlugin());

    // Enable regular collisions as well
    scene.collisionsEnabled = true;
    scene.workerCollisions = true;

    // Create camera
    let camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(2, 2, 2), scene);
    camera.attachControl(canvas, true);
    camera.setTarget(BABYLON.Vector3.Zero());

    camera.keysUp.push(87);
    camera.keysDown.push(83);
    camera.keysLeft.push(65);
    camera.keysRight.push(68);

    camera.speed = 2;
    // camera.fov = 0.8;
    // camera.inertia = 0;

    camera.ellipsoid = new BABYLON.Vector3(1.5, 0.5, 1.5);
    camera.checkCollisions = true;
    camera.applyGravity = true;

    // Create lights
    let light = new BABYLON.HemisphericLight("myLight", new BABYLON.Vector3(1, 1, 0), scene);

    let plane = BABYLON.MeshBuilder.CreatePlane("ground", {
        height: 20,
        width: 20
    }, scene)
    plane.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD);
    plane.position.y = -2;

    plane.collisionsEnabled = true;
    plane.checkCollisions = true;



    let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {}, scene);
    sphere.collisionsEnabled = true;
    sphere.checkCollisions = true;

    let spherePhysicsImposter = new BABYLON.PhysicsImpostor(
        sphere,
        BABYLON.PhysicsImpostor.BoxImpostor,
        {
            mass: 3,
            friction: 0.1,
            restitution: 0
        },
        scene
    );

    let planePhysicsImposter = new BABYLON.PhysicsImpostor(
        plane,
        BABYLON.PhysicsImpostor.BoxImpostor,
        {
            mass: 0,
            friction: 0.1,
            restitution: .7
        },
        scene
    );


    return scene;
}

export {
    createGameScene
};