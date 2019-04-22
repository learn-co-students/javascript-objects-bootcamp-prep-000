var playlist = {
 Eagle : 'Hotel California'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
  // return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}