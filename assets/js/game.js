
import { createGameScene } from "./gameScene.js"
import { showLoadingScreen, hideLoadingScreen } from "./loadingScreen.js"


window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);

    showLoadingScreen(canvas, engine)

    let scene = createGameScene(canvas, engine);


    scene.afterRender = () => {
        hideLoadingScreen(engine)
    }

    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener("resize", function () {
        engine.resize()
    });
})