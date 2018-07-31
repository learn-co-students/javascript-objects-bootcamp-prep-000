var playlist = { artistName: "DeafHeaven", songTitle: "DreamHouse" } ; 

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
}