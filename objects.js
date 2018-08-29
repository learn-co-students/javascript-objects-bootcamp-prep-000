var playlist = new Object({ Epik_High: "Born Hater"});


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

