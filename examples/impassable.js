//#############################################
// script name shown in gui
const name = "toggle impassable";
// available modes are: "oneShot" and "loop"
const mode = "oneShot";
// change this to true for autostart when in "loop" mode
const autoStart = false;
// interval for update function in "loop" mode
const updateInterval = 100;
// button label in "oneShot" mode this can be updated at runtime
let buttonString = "set passable";
//##############################################

const map = " "; // enter your room name here !
let isOpen = false;
let tiles = [[30,31], [30,32]]; 

function toggleDoor(gatherClient, xPos, yPos, isOpen){
    let mask = 0x01;
    if (isOpen){ mask = 0x00}
    let maskBuffer = Buffer.from([mask]).toString("base64");
    gatherClient.game.setMapCollisions(map, xPos, yPos, 1, 1, maskBuffer);
}

// this function runs automatically when the modul is loaded
function init(gatherClient){
    setTimeout(() => {
        tiles.forEach((t, i) => {
            toggleDoor(gatherClient, t[0], t[1], isOpen);
        });
    }, 2000);

}

// use this for "oneShot" mode
function oneShot(gatherClient){
    isOpen = !isOpen;
    tiles.forEach((t,i) =>{
        toggleDoor(gatherClient,t[0], t[1], isOpen);
    });

    if(isOpen){ buttonString = "set impassable"; }
    else{ buttonString = "set passable"; }
        
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
