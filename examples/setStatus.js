//#############################################
// script name shown in gui
const name = "funny status for players in groupA";
// available modes are: "oneShot" and "loop"
const mode = "oneShot";
// change this to true for autostart when in "loop" mode
const autoStart = false;
// interval for update function in "loop" mode
const updateInterval = 100;
// button label in "oneShot" mode this can be updated at runtime
let buttonString = "run";
//##############################################

   
// this function runs automatically when the modul is loaded
function init(gatherClient){

}

// use this for "oneShot" mode
function oneShot(gatherClient){
    gatherClient.playerIDs.forEach((id) => {
        if (gatherClient.playerList.get(id).groups[0]){
            gatherClient.game.setEmote('😆',id);
            gatherClient.game.setTextStatus('funny status',id);
            gatherClient.game.setEmojiStatus('😆',id);
        }
    });
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
