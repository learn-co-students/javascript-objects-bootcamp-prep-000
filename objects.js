let playlist = {
  artistName: "song titles"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
