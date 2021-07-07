var playlist = {artists: "songs"}

Object.assign({}, {artistName: songTitle})

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}

 