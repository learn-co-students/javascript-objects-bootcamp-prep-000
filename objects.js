var playlist = {artistName: "songTitle" }

function updatePlaylist (object, artistName, songTitle){

  return Object.assign(object, {[artistName]: songTitle})
}

function removeFromPlaylist (playlist, artistName) {

  delete playlist[artistName] //trues
  return playlist
}
