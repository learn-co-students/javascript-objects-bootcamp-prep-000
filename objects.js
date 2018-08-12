var playlist = {
  artist: "Girl"
}

// var playlist = {}
// Object.assign(playlist, {artist: "Girl"})
function updatePlaylist(playlist,name,songTitle){
  Object.assign(playlist,{[name]:songTitle})
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}