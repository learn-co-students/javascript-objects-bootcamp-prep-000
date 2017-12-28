var playlist = {"Bon Iver": 'flume', TI: 'Dead and Gone'}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}