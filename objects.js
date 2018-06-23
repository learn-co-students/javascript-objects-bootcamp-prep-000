var playlist = { beethoven:'symphony', mozart: 'concerto', chopin:'nocturne'} 

function updatePlaylist(playlist, singer, song) {
  playlist[singer] = 'song'
  return playlist
}

function removeFromPlaylist(playlist, singer) {
  delete playlist[singer] 
  return playlist
}
