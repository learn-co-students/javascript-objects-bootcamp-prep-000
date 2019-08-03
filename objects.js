var playlist = {};

var playlist = {
  'Taylor Swift': 'Style', 
  'Rihanna': 'Rehab'
}

function updatePlaylist(playlist, artistName, songTitle) { playlist[artistName] = songTitle 
  return playlist
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist
}