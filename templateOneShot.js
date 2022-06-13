//#############################################
// script name shown in gui
const name = "template script oneShot";
// availabel modes are: "oneShot" and "loop"
const mode = "oneShot";
// change this to true for autostart when in "loop" mode
const autoStart = false;
// interval for update function in "loop" mode
const updateInterval = 100;
// string shown on button in "oneShot" mode this can be updated at runtime
let buttonString = "run";
//##############################################


// this function runs automaticly when the modul is loaded
function init(gatherClient){

}

// use this for "oneShot" mode
function oneShot(gatherClient){

    return buttonString;
}


// use this for "loop" mode
function start(gatherClient){

}

function update(gatherClient){

}

function stop(gatherClient){

}



module.exports = {
    name,
    mode,
    autoStart,
    updateInterval,
    buttonString,
    init,
    start,
    update,
    stop,
    oneShot,
}