var playlist = {
  beetles: 'yesterday'
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName] // syntax references variable, so use [var]
  return playlist
}
