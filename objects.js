var playlist = {
  artistName : "Five Finger Death Punch" ,
  songTitle : "War Is The Answer"
}

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];

  return playlist
}
