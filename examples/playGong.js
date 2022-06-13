//#############################################
// script name shown in gui
const name = 'play "gong" sound';
// available modes are: "oneShot" and "loop"
const mode = "oneShot";
// change this to true for autostart when in "loop" mode
const autoStart = false;
// interval for update function in "loop" mode
const updateInterval = 100;
// button label in "oneShot" mode this can be updated at runtime
let buttonString = "play";
//##############################################

let sound = "https://sound-effects-media.bbcrewind.co.uk/mp3/07011233.mp3";
let volume = 0.5;

// this function runs automatically when the modul is loaded
function init(gatherClient){

}

// use this for "oneShot" mode
function oneShot(gatherClient){
    gatherClient.game.playSound(sound, volume);
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
