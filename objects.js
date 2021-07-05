var playlist = { 
  Drake : 'Controlla',
  LitaFord: 'Kiss Me Gently',
  AtTheGates: 'Slaughter of the Soul',
}  

function updatePlaylist(playlist,artist,song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist[artist];
  return playlist
}