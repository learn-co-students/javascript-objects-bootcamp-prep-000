var playlist =  { bieber: "baby",
gomez: "naturally" };

function updatePlaylist(playlist, artistName,songTitle){
  return Object.assign({},playlist,{artistName:songTitle})
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName
  return playlist
}
