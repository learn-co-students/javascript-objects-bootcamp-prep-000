var playlist = {
  Beyonce: 'I\'m here',
  LadyGaga: 'Bad Romance'
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}