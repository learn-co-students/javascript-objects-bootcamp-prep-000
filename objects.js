var playlist = {Sufjan: 'Eugene', Bieber: 'Sorry', Slayer: 'Raining Blood' }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}