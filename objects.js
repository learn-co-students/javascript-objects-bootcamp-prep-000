var playlist = {"Rolling Stones": ["Gimme Shelter"]};


// function updatePlaylist(obj,key,value)
function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}


function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}