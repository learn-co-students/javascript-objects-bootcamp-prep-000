var playlist = new Object({paramore:'decode'})

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artistName,songTitle){
delete playlist.Slowdive
 return playlist
}