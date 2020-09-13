let createGameScene = (canvas, engine) => {
    // Create scene
    const scene = new BABYLON.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
    scene.collisionsEnabled = true;

    // create Light
    const light = new BABYLON.PointLight('pointLight', new BABYLON.Vector3(0, 20, 0), scene);
    light.intensity = 0.7


    // Create Camera and Settings
    const camera = new BABYLON.UniversalCamera("MyCamera", new BABYLON.Vector3(0, 3, -10), scene);
    camera.keysUp.push(87);
    camera.keysDown.push(83);
    camera.keysLeft.push(65);
    camera.keysRight.push(68);

    camera.speed = 0.3;
    camera.fov = 0.8;
    camera.checkCollisions = true;
    camera.applyGravity = true;

    camera.ellipsoid = new BABYLON.Vector3(1.5, 1.5, 1.5);
    camera.ellipsoidOffset = new BABYLON.Vector3(0, 1, 0);

    camera.angularSpeed = 0.01;
    camera.angle = Math.PI / 2;
    camera.direction = new BABYLON.Vector3(Math.cos(camera.angle), 0, Math.sin(camera.angle));
    camera.setTarget(new BABYLON.Vector3(0, 3, 0));
    camera.attachControl(canvas, true);


    // Create Ground
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 65 }, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    ground.material.diffuseColor = new BABYLON.Color3(0.70, 0.35, 0.00);
    ground.material.backFaceCulling = false;
    ground.checkCollisions = true;


    // 3D Objects Construction
    const faceUV = new Array(3);
    faceUV[0] = new BABYLON.Vector4(0, 0, 7 / 15, 1);
    faceUV[1] = new BABYLON.Vector4(14 / 15, 0, 1, 1);
    faceUV[2] = new BABYLON.Vector4(7 / 15, 0, 14 / 15, 1);


    const mainWallData = [
        new BABYLON.Vector3(-50, 10, -32.5),
        new BABYLON.Vector3(50, 10, -32.5),
        new BABYLON.Vector3(50, 10, 32.5),
        new BABYLON.Vector3(-50, 10, 32.5),
    ];
    const mainWallHoleData = [
        [new BABYLON.Vector3(-49.8, 10, -32.3),
        new BABYLON.Vector3(49.8, 10, -32.3),
        new BABYLON.Vector3(49.8, 10, 32.3),
        new BABYLON.Vector3(-49.8, 10, 32.3)],
    ]

    const wall1Data = [
        new BABYLON.Vector3(-49.8, 0, 0),
        new BABYLON.Vector3(-14, 0, 0),
        new BABYLON.Vector3(-14, 0, 5),
        new BABYLON.Vector3(-10, 0, 5),
        new BABYLON.Vector3(-10, 0, 0),
        new BABYLON.Vector3(15, 0, 0),
        new BABYLON.Vector3(15, 0, 10),
        new BABYLON.Vector3(-49.8, 0, 10),
    ];

    const wall2Data = [
        new BABYLON.Vector3(5, 0, 49.8),
        new BABYLON.Vector3(5, 0, 45.8),
        new BABYLON.Vector3(0, 0, 45.8),
        new BABYLON.Vector3(0, 0, -11),
        new BABYLON.Vector3(5, 0, -11),
        new BABYLON.Vector3(5, 0, -15),
        new BABYLON.Vector3(10, 0, -15),
        new BABYLON.Vector3(10, 0, 49.8),
    ];

    const libraryData = [
        new BABYLON.Vector3(-27.5, 0, 0),
        new BABYLON.Vector3(-17.5, 0, 0),
        new BABYLON.Vector3(-17.5, 0, 8),
        new BABYLON.Vector3(-5, 0, 8),
        new BABYLON.Vector3(-5, 0, 0),
        new BABYLON.Vector3(5, 0, 0),
        new BABYLON.Vector3(5, 0, 8),
        new BABYLON.Vector3(17.5, 0, 8),
        new BABYLON.Vector3(17.5, 0, 0),
        new BABYLON.Vector3(27.5, 0, 0),
        new BABYLON.Vector3(27.5, 0, 10),
        new BABYLON.Vector3(-27.5, 0, 10),
    ];

    const blocksData = [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(9, 0, 0),
        new BABYLON.Vector3(9, 0, 5),
        new BABYLON.Vector3(18, 0, 5),
        new BABYLON.Vector3(18, 0, 10),
        new BABYLON.Vector3(7, 0, 10),
        new BABYLON.Vector3(7, 0, 7),
        new BABYLON.Vector3(-1, 0, 7),
        new BABYLON.Vector3(-1, 0, 10),
        new BABYLON.Vector3(-9, 0, 10),
        new BABYLON.Vector3(-9, 0, 4),
        new BABYLON.Vector3(0, 0, 4),
    ]

    const thinBlockData = [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(40, 0, 0),
        new BABYLON.Vector3(40, 0, 5),
        new BABYLON.Vector3(5, 0, 5),
        new BABYLON.Vector3(5, 0, 20),
        new BABYLON.Vector3(0, 0, 20),
    ]


    const mainWall = BABYLON.MeshBuilder.ExtrudePolygon("mainWall", { shape: mainWallData, holes: mainWallHoleData, depth: 10, faceUV: faceUV }, scene);
    mainWall.material = new BABYLON.StandardMaterial("wall1Mat", scene);
    mainWall.material.diffuseTexture = new BABYLON.Texture('/assets/img/mainWall.jpg', scene);
    mainWall.material.backFaceCulling = false;
    mainWall.position.y = 10
    mainWall.checkCollisions = true;

    const wall1 = BABYLON.MeshBuilder.ExtrudePolygon("wall1", { shape: wall1Data, depth: 0.3, faceUV: faceUV }, scene);
    wall1.material = new BABYLON.StandardMaterial("wall1Mat", scene);
    wall1.material.diffuseColor = new BABYLON.Color3(1, 0.42, 0.30);
    wall1.material.backFaceCulling = false;
    wall1.rotation.x = -Math.PI / 2
    wall1.checkCollisions = true;

    const wall2 = BABYLON.MeshBuilder.ExtrudePolygon("wall2", { shape: wall2Data, depth: 0.3, faceUV: faceUV }, scene);
    wall2.material = new BABYLON.StandardMaterial("wall5Mat", scene);
    wall2.material.diffuseColor = new BABYLON.Color3(0.80, 0.00, 0.27);
    wall2.material.backFaceCulling = false;
    wall2.rotation.z = BABYLON.Tools.ToRadians(90)
    wall2.position.x = 15
    wall2.position.z = -17.5
    wall2.checkCollisions = true;

    const library = BABYLON.MeshBuilder.ExtrudePolygon("library", { shape: libraryData, depth: 20, faceUV: faceUV }, scene);
    library.rotation.x = -Math.PI / 2
    library.position.x = -18
    library.position.z = 5
    library.checkCollisions = true;

    const blocks1 = BABYLON.MeshBuilder.ExtrudePolygon("blocks1", { shape: blocksData, depth: 10, faceUV: faceUV }, scene);
    blocks1.position.y = 10
    blocks1.position.x = 28
    blocks1.position.z = -25
    blocks1.checkCollisions = true;

    const blocks2 = BABYLON.MeshBuilder.ExtrudePolygon("blocks2", { shape: blocksData, depth: 10, faceUV: faceUV }, scene);
    blocks2.position.y = 10
    blocks2.position.x = 28
    blocks2.position.z = 15
    blocks2.checkCollisions = true;


    const blocks3 = BABYLON.MeshBuilder.ExtrudePolygon("blocks3", { shape: blocksData, depth: 10, faceUV: faceUV }, scene);
    blocks3.position.y = 10
    blocks3.rotation.y = BABYLON.Tools.ToRadians(180)
    blocks3.position.x = 37
    blocks3.position.z = 5
    blocks3.checkCollisions = true;


    const blocks4 = BABYLON.MeshBuilder.ExtrudePolygon("blocks4", { shape: thinBlockData, depth: 10, faceUV: faceUV }, scene);
    blocks4.position.y = 10
    blocks4.position.x = -35
    blocks4.position.z = -25
    blocks4.checkCollisions = true;


    return scene;
}

export {
    createGameScene
};