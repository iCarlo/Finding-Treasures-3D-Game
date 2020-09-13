let showLoadingScreen = (canvas, engine) => {
    let defaultLoadingScreen = new BABYLON.DefaultLoadingScreen(canvas, "Please Wait", "black");

    engine.loadingScreen = defaultLoadingScreen;
    engine.displayLoadingUI();
}

let hideLoadingScreen = (engine) => {
    engine.hideLoadingUI()
}


export {
    showLoadingScreen,
    hideLoadingScreen
}