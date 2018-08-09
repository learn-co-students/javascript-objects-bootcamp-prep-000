var playlist = {'Meek Mill':'Dreams Worth More than Money'}
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = 'Bruh'
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.Slowdive
  return playlist
}