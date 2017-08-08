console.log()

var playlist = {GEzra: 'Budapest'}

function updatePlaylist (playlist, artistName, songTitle) {

  return Object.assign(playlist, {[artistName]: songTitle})

}

//console.log("before the update: " + playlist)
//console.log()


var updatedPlaylist = updatePlaylist(playlist, 'Louane', 'Avenir')


console.log(playlist)
console.log()
console.log(updatedPlaylist)
console.log()

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]

  return playlist

}

//playlist = { GEzra: 'Budapest', Louane: 'Avenir'}

removeFromPlaylist (playlist, 'GEzra')

console.log(playlist)
//when I type anything else in the brackets such as:
//(`does this work: ${playlist}`) or ("does it work: " + playlist)
//I get back "does this work: [object Object]" or "does it work: [object Object]"
//however if I leave it as console.log(playlist) it returns the correct { Louane: 'Avenir' } ??
console.log()
