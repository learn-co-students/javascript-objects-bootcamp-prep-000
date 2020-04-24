var playlist = {Object};

function updatePlaylist(playlist, artistName, songTitle) {
 var updatePlaylist = playlist[artistName] = songTitle
 return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}