var playlist = { Eminem : "If I Had", Metalica : "Sandman", Semisonic : "Closing Timne" }

function updatePlaylist (playlist, artistName, songTitle) {
  return ( Object.assign({}, playlist, {[artistName]: songTitle}) )
}
function removeFromPlaylist (playlist, artistName) {
 delete playlist[artistName]
return playlist
}
