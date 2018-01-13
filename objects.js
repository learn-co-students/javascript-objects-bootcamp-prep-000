var playlist = {artistName:"songtitle"};


function updatePlaylist(playlist,artistName,songtitle){
  return Object.assign(playlist, {[artistName]:songtitle});
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist
}
