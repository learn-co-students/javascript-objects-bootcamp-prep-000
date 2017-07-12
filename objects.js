var playlist = {Blackbear: 'Do re mi'}

/*function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle ;
  return playlist
}*/

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
