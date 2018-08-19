var playlist = {
  "Alicia Keys": "Never Felt This Way",
  "Lauryn Hill" : "Oh, Jerusalem",
  "India Arie" : "Little Things"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}