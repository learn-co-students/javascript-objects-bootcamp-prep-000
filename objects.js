var playlist= new Object();

function updatePlayList(playlist,artistName,songTitle){
  Object.assign({playlist:"artistName"},{playList:"songTitle"})
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete artistName
}
