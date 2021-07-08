var playlist = {artistName:"songTitle"};

function updatePlaylist(playlist,artistName,songTitle){
  Object.assign(playlist,{[artistName]:songTitle})
  return playlist
}

function removeFromPlaylist(artistName){
  delete playlist.artistName
  return playlist
}
