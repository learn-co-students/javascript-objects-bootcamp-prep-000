var playlist = {EDEN: "Billie Jean", Crywolf: "St. Patrick", PostMalone: "White Iverson"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}