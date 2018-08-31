var playlist = {
  Maggie: 'Alaska',
  Dio: 'Holy Diver'
}

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle
 return artistName
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}