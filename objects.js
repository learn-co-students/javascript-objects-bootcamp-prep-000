var playlist = { 'Michael Jackson':'Thriller' }

function updatePlaylist (playlist, name, title){
  playlist[name]= title
  return playlist
}

function removeFromPlaylist (playlist, name){
  delete playlist[name]
}
