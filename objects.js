var playlist = {
  "Echosmith": "Goodbye",
  "Electric Guest": "Oh Devil",
  "Charlie Puth": "Attention"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
