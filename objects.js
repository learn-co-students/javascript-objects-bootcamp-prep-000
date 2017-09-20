var playlist = new Object({'New found glory': 'All downhill from here'});

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle
  return playlist
}
function removeFromPlaylist (playlist,artistName){
  delete playlist[artistName]
  return playlist
}
