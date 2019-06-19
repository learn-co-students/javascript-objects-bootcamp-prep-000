let playlist = {nas:'illmatic'}

function updatePlaylist(obj,artist,song){
  return Object.assign(playlist,{[artist]:song})
  
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
