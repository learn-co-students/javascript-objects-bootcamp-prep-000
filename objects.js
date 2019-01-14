var playlist = {
  theBeatles: "hard day's night",
  theWho: "my generation",
  rhcp: "snow (hey oh)"
}

function updatePlaylist(playlist, artistName, songTitle) {
  
  playlist[artistName] = [songTitle]
  
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  
  delete playlist[artistName]
  
  return playlist
}