var playlist = {
  'Calvin Harris': 'My Way'
}

function updatePlaylist (playlist, artist, song){
  playlist[artist]=song
  return playlist
}

function removeFromPlaylist (playlist, artist){
  delete playlist[artist]
  return playlist
}
