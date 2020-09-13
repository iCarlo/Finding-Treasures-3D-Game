const playGame = (scene) => {
    const crystalCount = document.querySelector(".crystalCount h5")
    let count = 0

    // 5 minutes countdown timer
    const startTimer = (duration, display) => {
        let timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = () => {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };


    // random cube placements
    for (let i = 0; i < 5; i++) {
        let cube = BABYLON.MeshBuilder.CreateBox("cube", { size: 0.5 }, scene);
        cube.material = new BABYLON.StandardMaterial("cubeMat", scene);
        cube.material.diffuseColor = new BABYLON.Color3(0.00, 0.80, 0.80);
        cube.checkCollisions = true;
        cube.position.y = 0.25
        cube.position.x = Math.random() < 0.5 ? Math.floor(-(Math.random() * 30) + 1) : Math.floor((Math.random() * 30) + 1);
        cube.position.z = Math.random() < 0.5 ? Math.floor(-(Math.random() * 47) + 1) : Math.floor((Math.random() * 47) + 1);


        cube.actionManager = new BABYLON.ActionManager(scene);
        cube.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger, () => {
                    count += 1
                    crystalCount.textContent = count
                    cube.dispose()
                })
        );
    }
}

export {
    playGame
}