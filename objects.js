var playlist = { artist: 'Justin Bieber' , song: 'baby'}

function updatePlaylist(object, Justin, baby) {
  object[Justin] = baby

  return object  
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  
  return playlist
}