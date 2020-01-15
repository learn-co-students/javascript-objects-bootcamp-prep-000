var playlist = {artist1:'song'}

function updatePlaylist (playlist,name,song){
  playlist[name] = song;
  return updatePlaylist
}

function removeFromPlaylist (playlist,name){
  delete playlist[name];
  return removeFromPlaylist;
}
