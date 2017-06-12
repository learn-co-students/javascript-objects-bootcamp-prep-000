var playlist = {Kanye:"famous"};

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName){
  var playlist = {}
  delete playlist.artistName
  return playlist
}
