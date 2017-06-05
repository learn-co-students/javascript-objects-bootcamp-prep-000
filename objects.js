var playlist = {
  'Prof': 'I had sex in the 90\'s'
}

function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist
}