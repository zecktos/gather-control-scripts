//#############################################
// script name shown in gui
const name = "play/stop cave sound atmosphere ";
// available modes are: "oneShot" and "loop"
const mode = "loop";
// change this to true for autostart when in "loop" mode
const autoStart = false;
// interval for update function in "loop" mode
const updateInterval = 4000;
// button label in "oneShot" mode this can be updated at runtime
let buttonString = "run";
//##############################################

const map = " "; // enter your room name here !

let snd = {
        src: "https://sound-effects-media.bbcrewind.co.uk/mp3/NHU05078092.mp3?download&rename=BBC_Cave-Atmos_NHU0507809",
        volume: 0.7,
        loop: true,
        maxDistance: 1000,
        distThreshold: 1,
        isPositional: false,
   }

const objID = "soundEmitter";
let obj = {
    _name: "soundEmitter",
    id: objID,
    height: 1,
    width: 1,
    x: 20,
    y: 20,
    sound: snd,
    type: 0,
    normal: ""
}
   
// this function runs automatically when the modul is loaded
function init(gatherClient){

}

// use this for "oneShot" mode
function oneShot(gatherClient){
  
    return buttonString;
}


// use this for "loop" mode
function start(gatherClient){
    obj.sound.volume = 0.5;
    gatherClient.game.setObject(map, objID, obj);
}

function update(gatherClient){

}

function stop(gatherClient){
    obj.sound.volume = 0;
    setTimeout(()=>{ gatherClient.game.deleteObject(map, objID) },1000);

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
