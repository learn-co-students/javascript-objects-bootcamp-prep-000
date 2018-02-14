
var playlist = {
  Beyonce:  'halo'
}

function updatePlaylist(playlist, key, value) { 
  playlist[key] = value ;
  return playlist
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist[artistname]
  return playlist
}
