var playlist = {artistName: undefined, songTitle: undefined};

function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {

  var playlist = {artistName: undefined}
  delete playlist.artistName;
  return playlist
  
}