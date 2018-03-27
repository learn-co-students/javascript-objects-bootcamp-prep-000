var playlist = {'Slowdivffe':'Aliffson', 'My Blffoody Valentine':'Sometffimes'}

function updatePlaylist(playlist, artist, song){
  playlist[artist]=song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}
