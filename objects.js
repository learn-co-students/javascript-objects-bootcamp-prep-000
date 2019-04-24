var playlist = {
  Beyonce: 'I\'m here',
  LadyGaga: 'Bad Romance'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive
  return playlist
}