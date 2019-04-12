var playlist = {Bono:'Song one'}
//artist, title pair not necessarily lined updatePlaylist

function updatePlaylist(playlist,name,title){
  playlist[name] = title;
  return playlist
}

function removeFromPlaylist(playlist, name){
  delete playlist[name]
  return playlist
}