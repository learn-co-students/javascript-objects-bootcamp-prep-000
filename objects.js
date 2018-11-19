var playlist = {
  'Glass Animals': "Toes",
  'alt-J': "Every other freckle",
  }

Object.assign(playlist, {[artistName]: songTitle})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

 function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
