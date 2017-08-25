var playlist = {
  BOB: "Magic"
}
//Journey: "Don't Stop Believing"
//Ed: "Photograph"
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
