var playlist = {Yes:'South Side of the Sky'}

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
