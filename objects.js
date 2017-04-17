var playlist = {
  'The Beatles': "Love Me Do",
  Prince : "When You Were Mine",
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
