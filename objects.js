var playlist = {
  "Jay Chou":"Pu Gong Yin"

}

function updatePlaylist(playlist, name, song){
 playlist[name] = song;
 return playlist;
}

function removeFromPlaylist(playlist, name){
  delete playlist[name]
  return playlist
}
