var playlist = {
  beatles : "blackbird",
  queen : "bohemian", 
  billy : "pianoman",
  elton : "rocketman",
}

function updatePlaylist (playlist, artist, title) {
  playlist[artist] = title
  
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  
  return playlist
}