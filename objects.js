var playlist = {}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}

updatePlaylist(playlist, "Jay Z", "High")
updatePlaylist(playlist, "Skillet", "Undefeated")
removeFromPlaylist(playlist, "Jay Z")