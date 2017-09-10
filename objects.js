var playlist = {name:"song"}

function updatePlaylist(playlist, name, song){
  return Object.assign({},playlist,{[name]:song})
}

function removeFromPlaylist(playlist,name){
  delete playlist[name];
return playlist

}
