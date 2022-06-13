# GatherControl example scripts
example scripts and templates for the [GatherControl](https://github.com/zecktos/gather-control) app

## API
everything from the [gather-game-client](https://www.npmjs.com/package/@gathertown/gather-game-client) is accessible under 
```
gatherClient.game
```
check out the [documentation](http://gather-game-client-docs.s3-website-us-west-2.amazonaws.com/classes/Game.html) for more infos 
***
a [node-notifier](https://github.com/mikaelbr/node-notifier) object is accessible under
```
gatherClient.notifier
```
***
additionally you have an Array with all player IDs
```
gatherClient.playerIDs
```
and a Map of player IDs and player objects
```
gatherClient.playerList
```
have a look at the [gatherClient class](https://github.com/zecktos/gather-control/blob/main/src/components/gatherClient.ts) for more infos
 
## examples 
- **impassable.js**
	- toggles two impassable tiles at positions 30,31 and 30,32
	- you need to enter your room name 
- **playGong.js**
	- plays a "gong" sound for all players in all rooms
- **setStatus.js**
	- sets text status and emoji status for all players in group A
- **soundAtmo.js**
	- creates a sound emitter object with cave sounds at positions 20,20
	- deletes the object when stopping
	- you need to enter your room name