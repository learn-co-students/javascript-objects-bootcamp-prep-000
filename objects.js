var playlist = {
  artist: "Nine Inch Nails"
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  var prop = artistName;
  delete playlist[prop];
  return playlist;
}
